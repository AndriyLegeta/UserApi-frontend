import { Component, OnInit } from '@angular/core';
import {JsonService} from '../../services/json.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  isUpdate: boolean = true;
  users: any = {};

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
    this.jsonService.deleteUser(id).subscribe();
    this.ngOnInit();
  }
  update(body) {
    this.jsonService.updateUser(body).subscribe((data:{}) => {console.log(data)});
    this.ngOnInit();
    this.isUpdate = !this.isUpdate;
  }

}
