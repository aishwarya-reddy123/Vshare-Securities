import { Component, AfterViewChecked } from '@angular/core';
 
declare let paypal: any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements AfterViewChecked {

  addScript: boolean=false;
    
  finalAmount: number;

  paypalconfig={
    env: 'sandbox',
    client :{
      sandbox :'AQn6RuAv7Pd1iDhL-40TmaHp8aLGHuRNZgga46Z4elMOapgi9NFFyLOH9GkK8B93XaQgNXa3LtcTcMmY',
    },
    commit: true,
    payment: (data, actions) =>{
      return actions.payment.create({
        payment:{
          transactions:[
            {amount:{ total: this.finalAmount, currency: 'INR'}}
          ]
        }
      });
    },
    onAuthorize:(data, actions) =>{
      return actions.payment.execute().then((payment) =>{

      })
    }
  };
   
  ngAfterViewChecked(): void{
    if(!this.addScript){
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalconfig, '#paypal-checkout-btn');

      })
    }
  }

  addPaypalScript(){
     this.addScript =true;
     return new Promise((resolve, reject) =>{
       let scripttagElement = document.createElement('script');
       scripttagElement.src= 'https://www.paypalobjects.com/api/checkout.js';
       scripttagElement.onload = resolve;
       document.body.appendChild(scripttagElement);
     })
   }


}
