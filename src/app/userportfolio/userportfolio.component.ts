import { TokenStorageService } from './../_services/token-storage.service';
import { PortfoliotableService } from './../portfoliotable.service';
import { Portfolio } from './../portfolio';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-userportfolio',
  templateUrl: './userportfolio.component.html',
  styleUrls: ['./userportfolio.component.css']
})
export class UserportfolioComponent implements OnInit {
  content: string;
  
  portfolio: Portfolio;
  
  portfolioes= [];
  constructor( private router: Router  , private userService: UserService,private UserDetails:TokenStorageService,
    private portfoliotableServie: PortfoliotableService) { }

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe(
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
    const user=this.UserDetails.getUser();
    this.portfoliotableServie.getPortfolioList(user.id).subscribe((data)=>{
      this.portfolioes=data;
    });
  }


}
