import { Component, OnInit } from '@angular/core';
import {CosService} from "../services/cos.service";
import Swal from "sweetalert2";

declare let $;

interface cosMeeting {
	date?: String;
	heure?: String;
	lieu?: String;
	objet?: String;
}

const formatValue=(str, max) =>{
  if (str.charAt(0) !== '0' || str == '00') {
    let num = parseInt(str);
    if (isNaN(num) || num <= 0 || num > max) num = 1;
    str = num > parseInt(max.toString().charAt(0)) && num.toString().length == 1 ? '0' + num : num.toString();
  };
  return str;
};

const formatMeridian = (str)=>{
  str = str.toUpperCase().trim();
  return /(AM|PM|^A$|^P$)/.test(str) ? str :'';
}

@Component({
  selector: 'app-cos',
  templateUrl: './cos.component.html',
  styleUrls: ['./cos.component.scss']
})
 
export class CosComponent implements OnInit {
  newCOS: cosMeeting;
  sendInvitation = false;
  minDate: any = '';
  allCos: any;

  constructor(private cosService: CosService) { }

  ngOnInit() {
  	this.preventPastDate();
  	this.getCos();
  }

  addNewCosMeeting(){
  	this.newCOS = {"objet":"Comité Opérationel de Sureté"};
  }

  getCos(){
  	this.cosService.getCos().subscribe((res: any) => {
  		if (res.success) {
          this.allCos = res.data;
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
      })
  }

  cancelNewCos(){
  	this.newCOS = null;
    this.sendInvitation = false;
  }

  saveNewCos(){
  	// Reset sendInvitation
  	this.cosService.store(this.newCOS).subscribe((res: any) => {
  		if (res.success) {
          this.newCOS = null;
          this.sendInvitation = false;
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Opération Réussie!',
            showConfirmButton: false,
            timer: 2000
          });
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
      }
  	);
  }

  getCosStatus(cos){
  	let cosDate = new Date(cos.date).setHours(0,0,0,0);
  	const today = new Date().setHours(0,0,0,0);
  	console.log(cosDate);
  	console.log(today);
  	if(cosDate < today){
  		return "Terminée";
  	} else if(cosDate == today){
  		return "Aujourd'hui";
  	} else if (cosDate > today){
  		return "A venir";
  	}
  }

  preventPastDate(){
  	var dtToday = new Date();
    
    var month = dtToday.getMonth() + 1;
    let monthString = month.toString()
    var day = dtToday.getDate();
    let dayString = day.toString();
    var year = dtToday.getFullYear();
    if(month < 10)
        monthString = '0' + month.toString();
    if(day < 10)
        dayString = '0' + day.toString();
    
    this.minDate = year + '-' + monthString + '-' + dayString;
  }

  formatTime(e){
	let input = e.target.value;
	// Test if ending with /, so it's a delete operation when ending with /
	if (/\D:$/.test(input)){
	input = input.substr(0, input.length - 3);
	}
	// /\D/g replaces every non zero value
	const values = input.split(':');
	const timeValues = values.slice(0,2).map((v)=>v.replace(/\D/g, ''));

	if (timeValues[0]) timeValues[0] = formatValue(timeValues[0], 12);
	if (timeValues[1]) timeValues[1] = formatValue(timeValues[1], 59);

	const output = timeValues.map(
	(v, i)=> v.length == 2 && i < 2 ? v + ' : ' : v);
	if(values[2]){
	const meridian = formatMeridian(values[2]);
	output.push(meridian);
	}

	e.target.value = output.join('').substr(0, 12);
  }

}
