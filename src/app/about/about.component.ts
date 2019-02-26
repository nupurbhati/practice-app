import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UsersService } from '../users.service';
import { Users} from '../users'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  // users: Users;
  usersList: any;

  constructor(private usersService : UsersService) {

 
   }
  ngOnInit() {
  	this.getUsers();

  }

  getUsers(): void {
  this.usersService.getAllUsers()
      .subscribe(users => 
        this.usersList = users);
        // this.users = users);
};
}
