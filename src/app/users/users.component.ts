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
  isUpdate: boolean = true;
  users = {};
  userChanged = {};

  formObj = {
    name:'',
    email:'',
    id:'',
  };
  constructor(private  jsonService: JsonService) {
  }

  ngOnInit() {
    this.jsonService.getUsers().subscribe((users) => {
      if (users) {
        this.users = users;
      }

    });
  }

  changeUpdate() {
    this.isUpdate = !this.isUpdate;
  }

  delete(id) {
    this.ngOnInit();
    this.jsonService.deleteUser(id).subscribe();
    this.ngOnInit();
  }
  update(body) {
    console.log(body);
    this.jsonService.updateUser(body).subscribe((data:{}) => {console.log(data)});
    this.ngOnInit();
    this.isUpdate = !this.isUpdate;
  }

}
