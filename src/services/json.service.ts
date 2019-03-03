import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Hosts} from "../models/Hosts";

import {User} from '../models/User';
import {Observable} from 'rxjs';




@Injectable({ // @Injectable - ваш сервіс може викоритовувати інші сервіси
  providedIn: 'root' // якщо записуємо providedIn: 'root' то вже не треба писати в  app.module -  providers: [],
})
export class JsonService {


  // добавляємо токен в хедер authorization
  headers = new HttpHeaders()
    .set('authorization', localStorage.getItem('token'));

  constructor(private  http: HttpClient) { }  //ангулар в себе в контейнері пошукає обєкт http і передасть його

  /*Observable - обєкт в нього приходять дані і він може розсилати їх своїм підписникам*/
  getUsers(){  // getTodos() верне Observable класу <User>
    return this.http.get(`${Hosts.API_HOST}`,{headers: this.headers});
  }
  getUserById(id): Observable<User>{
    return this.http.get<User>(`${Hosts.API_HOST}/${id}`);
  }
  postData(user: User): Observable<User>{
    const body = {name: user.name, email: user.email, password: user.password};
    return this.http.post<User>(`${Hosts.API_HOST}`, body);
  }

  deleteUser(id): Observable<User>{
    return this.http.delete<User>(`${Hosts.API_HOST}/delete/${id}`,{headers: this.headers});
  }
  updateUser(userChanged): Observable<User>{
    return this.http.put<User>(`${Hosts.API_HOST}/update`, userChanged,{headers: this.headers});
  }
  loginUser(user): Observable<User>{
    const body = {name: user.name, password: user.password};
    return this.http.post<User>(`${Hosts.API_HOST}/login`, body);
  }
}
// якщо щось передати (put, post) то get(this.url, body) , this.http.get(this.url) - поверне обєкт Observable на який можна підписатися
