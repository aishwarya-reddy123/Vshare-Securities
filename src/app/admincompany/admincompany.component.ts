import { CompanytableService } from './../companytable.service';
import { Company } from './../company';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-admincompany',
  templateUrl: './admincompany.component.html',
  styleUrls: ['./admincompany.component.css']
})
export class AdmincompanyComponent implements OnInit {

  id: number;
  company: Company;
  companies: Observable<Company[]>;
  content: string;
  constructor(private companytableService:CompanytableService,
    private router: Router, private userService: UserService) { }

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
    
    this.companies=this.companytableService.getCompanyList();
  }
  
   goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
   }
}
