import { Component, OnInit } from '@angular/core';
import { CompanytableService } from './../companytable.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from './../company';

@Component({
  selector: 'app-updatecompany',
  templateUrl: './updatecompany.component.html',
  styleUrls: ['./updatecompany.component.css']
})
export class UpdatecompanyComponent implements OnInit {

  id: number;
  company: Company;
  submitted = false;
    
  constructor(private companytableService: CompanytableService,
    private route: ActivatedRoute,private router: Router,) { }

  ngOnInit(): void {
    this.submitted = false;
    this.company = new Company();

    this.id = this.route.snapshot.params['id'];
    
    this.companytableService.getCompany(this.id)
      .subscribe(data => {
        console.log(data)
        this.company = data;
      }, error => console.log(error));
  }
    

  updateCompany() {
    this.companytableService.updateCompany(this.id, this.company)
      .subscribe(data => console.log(data), error => console.log(error));
    this.company = new Company();
    this.gotoList();
  }
  onSubmit() {
    this.submitted = true;
    
    this.updateCompany();    
  }

  gotoList() {
    this.router.navigate(['/addcompany']);
  }

}
