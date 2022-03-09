import { Component, OnInit, Input, OnDestroy, ElementRef } from '@angular/core';
import { ChatService } from '../services/chat/chat.service';
import Swal from "sweetalert2";
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Message } from '../classes/Message';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import { DemandeServiceService } from '../services/demande-service.service';

declare let $;



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  demandeId;
  demande;
  authUser;
  message = '';
  newMessages = [];
  errorMsg = false;
  sending = false;
  allMessages = [];
  private _prevChatHeight: number = 0;
  echo;
  showPrononcerVerdictBox = false;
  nbreBadgesVerdict = 0;
  private messageSubscription: Subscription;
  constructor(private chatService: ChatService, private demandeService: DemandeServiceService, private userService: UserService, private router: Router, private route:
    ActivatedRoute, public element: ElementRef) {

    // @ts-ignore 
    window.Pusher = require('pusher-js');

    this.echo = new Echo({
      //authEndpoint :"http://localhost:8000/broadcasting/auth",
      host: "http://localhost:8000",
      broadcaster: 'pusher',
      key: 'ced3055a08d1274ba8a4',
      cluster: 'eu',
      forceTLS: true,
      auth: {
        headers: {
          Authorization: "UE5mSjVCeTZ0V3VKYWt2RGdnbTVQWHJUNUJ4ODRlTm5UZzB5TFdRVA==",
          Accept: 'application/json, text/plain, */*',
        },
      },
    });
    this.demandeId = this.route.snapshot.paramMap.get('id');
    console.log('demande.' + this.demandeId);
    this.echo.channel('demande.' + this.demandeId)
      .listen('MessageSent', (e) => {
        if (e.user.id != this.authUser.id)
          this.newMessages.push(e);

        console.log("st");
        console.log($('#chatHistory')[0].scrollTop);
        console.log($('#chatHistory')[0].scrollTop);
        if (($('#chatHistory')[0].scrollHeight - $('#chatHistory')[0].scrollTop) <= 400)
          this.showLastMessages();
      });
  }

  ngOnInit() {
    this.getAuthUser();
    this.getMessages();
    this.getDemande();
  }

  public ngAfterViewChecked(): void {
    /* need _canScrollDown because it triggers even if you enter text in the textarea */

    if (this._canScrollDown()) {
      console.log("lopo");
      this.showLastMessages();
    }
  }

  private _canScrollDown(): boolean {
    /* compares prev and current scrollHeight */

    var can = (this._prevChatHeight !== $('#chatHistory')[0].scrollHeight);

    this._prevChatHeight = $('#chatHistory')[0].scrollHeight;

    return can;
  }

  getAuthUser() {
    this.userService.auth().subscribe((res: any) => {
      if (res.success) {
        this.authUser = res.data;
      } else {
        this.router.navigate(['login']);
      }
    }, (err) => {
      this.router.navigate(['login']);
    });
  }

  getDemande() {
    this.demandeService.getDemande(this.demandeId).subscribe((res: any) => {
      if (res.success) {
        this.demande = res.data;
      } else {
        Swal.fire({
          icon: 'error',
          position: 'top-end',
          title: 'Oops...',
          text: 'Une erreur est survenue! Veuillez contacter l\'administrateur!',
          showConfirmButton: false,
          timer: 2000
        });
      }
    }, (err) => {
      Swal.fire({
        icon: 'error',
        position: 'top-end',
        title: 'Oops...',
        text: 'Une erreur est survenue! Veuillez contacter l\'administrateur!',
        showConfirmButton: false,
        timer: 2000
      });
    });
  }

  getMessages() {
    this.chatService.getMessages(this.demandeId).subscribe(
      (res: any) => {
        this.allMessages = res;
        this.showLastMessages();
      }
    )
  }
  postMessage() {
    if (this.message) {
      this.sending = true;
      let currentNewMessagesIndex = this.newMessages.length;
      this.newMessages.push({ message: this.message, messageError: false, created_at: new Date(), user: this.authUser });
      this.showLastMessages();
      let body = {
        message: this.message,
        user_id: this.authUser.id,
        demande_id: this.demandeId
      }
      this.message = '';
      this.chatService.postMessage(body).subscribe(
        (res: any) => {
          if (res.success) {
            this.sending = false;
          } else {
            this.newMessages[currentNewMessagesIndex].messageError = true;
            this.sending = false;
          }
        }, (err: any) => {
          this.newMessages[currentNewMessagesIndex].messageError = true;
          this.sending = false;
        }
      )
    }
  }

  isToday(date) {
    return new Date(date).setHours(0, 0, 0, 0) == new Date().setHours(0, 0, 0, 0);
  }

  isDateInThisWeek(date) {
    date = new Date(date);
    const todayObj = new Date();
    const todayDate = todayObj.getDate();
    const todayDay = todayObj.getDay();

    // get first date of week
    const firstDayOfWeek = new Date(todayObj.setDate(todayDate - todayDay));

    // get last date of week
    const lastDayOfWeek = new Date(firstDayOfWeek);
    lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6);

    // if date is equal or within the first and last dates of the week
    return date >= firstDayOfWeek && date <= lastDayOfWeek;
  }

  preventNewLine(e) {
    if (e.keyCode != 13) return;
    var msg = $("#area").val().replace(/\n/g, "");
    if (msg) {
      this.postMessage();
      $("#area").val("");
    }
    return false;
  }

  showLastMessages() {
    $('#chatHistory').stop().animate({
      scrollTop: $('#chatHistory')[0].scrollHeight
    });

  }

  prononcerVerdict() {
    let body = {
      demandeId: this.demandeId,
      nbre: this.nbreBadgesVerdict
    };
    this.demandeService.prononcerVerdict(body).subscribe(
      (res: any) => {
        if (res.success) {
          this.message = "Verdict- Nombre total de badges demandés: " + this.demande.usagers.length
           + " Nombre total de badges accordés: " + this.nbreBadgesVerdict;
           this.postMessage();
           this.showPrononcerVerdictBox = false;
           this.nbreBadgesVerdict = 0;
        } else {
          Swal.fire({
            icon: 'error',
            position: 'top-end',
            title: 'Oops...',
            text: 'Une erreur est survenue! Veuillez contacter l\'administrateur!',
            showConfirmButton: false,
            timer: 2000
          });
        }
      }, (err: any) => {
        Swal.fire({
          icon: 'error',
          position: 'top-end',
          title: 'Oops...',
          text: 'Une erreur est survenue! Veuillez contacter l\'administrateur!',
          showConfirmButton: false,
          timer: 2000
        });
      }
    )
  }

}
