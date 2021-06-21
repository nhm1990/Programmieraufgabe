import { Component } from '@angular/core';
import { ServerService } from './server.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private server: ServerService) { }
  
  //resultArr = [];
  resultArr: any[] = [];
  name: string | undefined;
  address: string | undefined;

  ngOnInit() {

  }

  executeMain(){
    var customer = this.createCustomerObject();
    console.log("TEMPTESTNH63463463 customer.name: " + customer.name);
    console.log("TEMPTESTNH63463463 customer.address: " + customer.address);
    this.server.executeMain(customer).then((response: any) => {
      console.log('Response', response);
      this.resultArr = response.map((arr: any) => {
        return arr;
      });
    });
  }

  createCustomerObject(){
    var customer = {
      name: this.name,
      address: this.address
    }

    return customer;
  }
}

