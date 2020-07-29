import { CompanytableService } from './../companytable.service';
import { Company } from './../company';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../_services/user.service';
@Component({
  selector: 'app-usertradenow',
  templateUrl: './usertradenow.component.html',
  styleUrls: ['./usertradenow.component.css']
})
export class UsertradenowComponent implements OnInit {



  nprice = " ";
  nopen = " ";
  nclose = " ";
  npreviousclose = " ";
  nhigh = " ";
  nlow = " ";

  public showMyMessage = false
  content: string;
  id: number;
  name: string;
  company: Company[];
  companies = [];

  constructor(private companytableService: CompanytableService,
    private router: Router, private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.name = " ";
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

    this.companytableService.getCompanyList().subscribe((data) => {
      this.companies = data;
    });
  }
  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  addtowatchlist(value) {
    this.name = value.name;
    this.nprice = value.price;
    this.nopen = value.open;
    this.nclose = value.close;
    this.npreviousclose = value.previousclose;
    this.nhigh = value.high;
    this.nlow = value.low;

    setTimeout(() => {
      this.showMyMessage = true
    }, 3000)
    this.companytableService.addtowatchlist(value);
    window.alert('Your Stock has been added to the Watchlist!');

  }
  private searchCompany() {
    this.companytableService.getCompanyname(this.name)
      .subscribe(company => this.company = company);
  }

  onSubmit() {
    this.searchCompany();
  }


}
