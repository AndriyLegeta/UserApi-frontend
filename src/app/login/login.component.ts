import {Component, Input, OnInit} from '@angular/core';
import {JsonService} from "../services/json.service";
import {IsloginService} from "../services/islogin.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin = true;
  user = {};
  token;
  logined;
  constructor(private http: JsonService, private isLoginService: IsloginService) { }

  ngOnInit() {
  }


  async submit(user) {
    console.log(user);
    await this.http.loginUser(user)
      .subscribe(
        (data:{}) => {this.token = data;
          localStorage.setItem('token', this.token.token.accessToken);},
        error => console.log(error)
      );
    this.isLogin = !this.isLogin;
    this.logined = this.isLoginService.isLogined();
  };

  logout(){
    this.isLoginService.logout();
  }

}
