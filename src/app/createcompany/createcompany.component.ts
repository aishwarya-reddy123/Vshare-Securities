import { Component, OnInit } from '@angular/core';
import { CompanytableService } from './../companytable.service';
import { Router } from '@angular/router';
import { Company } from './../company';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-createcompany',
  templateUrl: './createcompany.component.html',
  styleUrls: ['./createcompany.component.css']
})
export class CreatecompanyComponent implements OnInit {

  content: string;
  company: Company=new Company();
  
  submitted = false;
  constructor(private companytableService: CompanytableService,
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
  }

  newCompany(): void {
    this.submitted = false;
    this.company = new Company();
  }
  save() {
    this.companytableService.createCompany(this.company)
      .subscribe(data => console.log(data), error => console.log(error));
    this.company = new Company();
    this.gotoList();
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/addcompany']);
  }

}
