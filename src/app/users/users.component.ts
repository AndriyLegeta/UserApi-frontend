import { Component, OnInit } from '@angular/core';
import {JsonService} from '../../services/json.service';
import {User} from '../../models/User';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  isTrue: boolean = true;
  users = {};


  constructor(private  jsonService: JsonService) {
  }

  ngOnInit() {
    this.jsonService.getUsers().subscribe((users) => {
      if (users) {
        this.users = users;
      }

    });
  }

  changeTrue() {
    /*if(localStorage.getItem('token')){*/
    this.isTrue = !this.isTrue;
    this.ngOnInit();
   /* }*/

  }

  delete(id) {
    this.ngOnInit();
    this.jsonService.deleteUser(id).subscribe();
    this.ngOnInit();
  }
}
