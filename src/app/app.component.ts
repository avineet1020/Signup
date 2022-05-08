import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  /*
  paymentRequest:google.payments.api.PaymentDataRequest=
  {
   apiVersion:2,
   apiVersionMinor:0,
   allowedPaymentMethods:[
     {
       type:'CARD',
       parameters:
       {
          allowedAuthMethods:[
            'PAN_ONLY' , 'CRYPTOGRAM_3DS'
          ],
          allowedCardNetworks:[
            'AMEX', 'VISA' , 'MASTERCARD'
          ]
       },
       tokenizationSpecification:{
         type:'PAYMENT_GATEWAY',
         parameters:{
           gateway:'example',
           gatewayMerchantId:'exampleGatewayMerchantId'
         }
       }
     }
   ],
   merchantInfo:
   {
     merchantId:'12345623829323',
     merchantName:'Demo Merchant'
   },
   transactionInfo:
   {
     totalPriceStatus:'FINAL',
     totalPriceLabel:'Total',
     totalPrice:'1000.00',
     currencyCode:'INR',
     countryCode:'INDIA' 
    },
    callbackIntents:['PAYMENT_AUTHORIZATION']
  };
  onLoadPaymentData=(
    event:Event
  ):void=> {
    const eventDetail = event as CustomEvent<google.payments.api.PaymentData>;
    console.log('load payment data', eventDetail.detail);
  }
    onPaymentDataAuthorized: google.payments.api.PaymentAuthorizedHandler=(
      paymentData: any
    ) => {
    console.log('payment authorized', paymentData);
    return {
    transactionState: 'SUCCESS'
    };
  }
  onError = (event: ErrorEvent): void =>{
    console.error('error' , event.error);
  }*/
  }