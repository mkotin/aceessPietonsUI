var User = /** @class */ (function () {
    function User(id, fname, lname, login, password, email, fonction, api_key, remember_token, role_id, structure_id, email_verified_at) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.login = login;
        this.password = password;
        this.email = email;
        this.fonction = fonction;
        this.api_key = api_key;
        this.remember_token = remember_token;
        this.role_id = role_id;
        this.structure_id = structure_id;
        this.email_verified_at = email_verified_at;
    }
    return User;
}());
export { User };
//# sourceMappingURL=user.js.map