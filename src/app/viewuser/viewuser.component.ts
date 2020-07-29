import { UsertableService } from './../usertable.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  content: string;
  users:Observable<User[]>;

  constructor(private usertableService:UsertableService,
    private router: Router , private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  
    this.reloadData();
  }
  reloadData() {
    
    this.users=this.usertableService.getUserList();
  }

}
