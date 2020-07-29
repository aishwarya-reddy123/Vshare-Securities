import { CompanytableService } from './../companytable.service';
import { Company } from './../company';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})
export class AddcompanyComponent implements OnInit {

  content: string;
  companies=[];

  constructor(private companytableService:CompanytableService,
    private router: Router ,   private userService: UserService) {
      window.location.reload;
     }
    
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
    
    this.companytableService.getCompanyList().subscribe((data)=>{
      this.companies=data;
    });
  }
  

}
