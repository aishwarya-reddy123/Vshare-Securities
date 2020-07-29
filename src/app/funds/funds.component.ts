import { TokenStorageService } from './../_services/token-storage.service';
import { AddFunds } from './../addfunds';
import { Component, OnInit, NgZone } from '@angular/core';
import { UserService } from '../_services/user.service';
import { WindowRefService,ICustomWindow } from 'src/app/_services/windowref.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
declare var $:any;
@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {

  content: string;
  addFundsForm:FormGroup;
  fundsRequest:AddFunds;
  cost:number;
  user:any;
  available_funds:number;


  private window:ICustomWindow;
  public rzp:any;
  
  public options:any={
    key:'rzp_test_Udob6NQjWE3py9',
    name:'VShare',
    description:'Add Funds',
    amount:100,
    prefill:{
      name:'',
      email:''
    },
    notes:{},
    theme:{
      color:'#3880FF'
    },
    handler:this.paymentHandler.bind(this),
    modal:{
        ondismiss:(()=>{
          this.zone.run(()=>{
            console.log("Failed");
          })
        })
    }
  }

  constructor( private userService: UserService,private zone:NgZone,private windowref:WindowRefService,private fb:FormBuilder,private tk:TokenStorageService) { 
    this.user=this.tk.getUser();
    this.userService.getAvailableFunds(this.user.id).subscribe((data)=>{
      this.available_funds=data['message'];
    });
    this.addFundsForm=this.fb.group({
      amount:''
    });
    this.fundsRequest={
      payment_Id:'',
      user_id:0,
      amount:0,
      date:''
    };
    this.window=this.windowref.NativeWindow;
  }

  initPayment():void
  {
    this.cost=this.addFundsForm.get('amount').value;
    this.options.amount=this.cost*100;
    this.rzp=new this.windowref.NativeWindow['Razorpay'](this.options);
    this.rzp.open();
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
  }

  paymentHandler(res:any)
  {
    this.zone.run(()=>{
      console.log(res);
      this.fundsRequest.payment_Id=res['razorpay_payment_id'];
      this.fundsRequest.date=new Date().toISOString();
      this.fundsRequest.amount=this.cost;
      this.fundsRequest.user_id=this.user.id;
      console.log(this.fundsRequest);
      this.userService.addFunds(this.fundsRequest).subscribe((data)=>{
        console.log(data);
      });
      setTimeout(()=>{
          window.location.reload();
      },3000);
    });
  }

  showAddModal()
  {
    $('#addModal').modal('show');
  }
}
