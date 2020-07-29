import { CompanytableService } from './../companytable.service';
import { Company } from './../company';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  items:any;
  content: string;  
  constructor( private userService: UserService, private companytableService: CompanytableService) { }

  ngOnInit(): void {
    this.items = this.companytableService.getItems();
    this.userService.getUserBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
