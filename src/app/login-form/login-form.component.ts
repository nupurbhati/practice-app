import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { UsersService } from '../users.service';
import { Users } from '../users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  successmsg = "user successfully added to api";

  userObj: any;

  user: Users = {
    id: null,
    name:null,
    username:null,
    email:null,
    address:null
  };

  constructor(private usersService : UsersService) { 

  }

  ngOnInit() {

  }

  saveUser(newuser: Users): void{
    console.log(newuser);

    this.usersService.addUser( this.user ).subscribe(
          
      );
  }

}
