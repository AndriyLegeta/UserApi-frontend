import {Component, Input, OnInit} from '@angular/core';
import {JsonService} from "../../services/json.service";
import {User} from '../../models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isRegister = true;
  user: User=new User();

  receivedUser: User;
  done: boolean = false;

  constructor(private http: JsonService) {
  }


  submit(user) {
    this.http.postData(user)
      .subscribe(
        (data: User) => {this.receivedUser = data},
        error => console.log(error)
      );
    this.isRegister = !this.isRegister;
  };

  changeRegister() {
    this.isRegister = !this.isRegister;
  };

  ngOnInit(): void {


  }


}
