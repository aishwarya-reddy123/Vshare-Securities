import { CompanytableService } from './../companytable.service';
import { Company } from './../company';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-tradenow',
  templateUrl: './tradenow.component.html',
  styleUrls: ['./tradenow.component.css']
})
export class TradenowComponent implements OnInit {

  content: string;
  id: number;
  company:Company[];
  companies=[];

  constructor(private companytableService:CompanytableService,
    private router: Router  , private userService: UserService) { }

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
   
    this.companytableService.getCompanyList().subscribe((data) => {
      this.companies = data;
    });
  }
   goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
   }

}
