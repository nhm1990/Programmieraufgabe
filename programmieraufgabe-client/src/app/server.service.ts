import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) {
  }

  private async request(method: string, url: string, data?: any) {
    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body'
    });
    return new Promise((resolve, reject) => {
      result.subscribe(resolve, reject);
    });
  }

  //Customers
  getCustomers() {
    return this.request('GET', `${environment.serverUrl}/customer`);
  }

  createCustomer(customer: any) {
    return this.request('POST', `${environment.serverUrl}/customer`, customer);
  }

  updateCustomer(customer: any) {
    return this.request('PUT', `${environment.serverUrl}/customer/${customer.id}`, customer);
  }

  deleteCustomer(customer: any) {
    return this.request('DELETE', `${environment.serverUrl}/customer/${customer.id}`);
  }


  //Main
  executeMain(customer: any){
    return this.request('POST', `${environment.serverUrl}/main`, customer);
  }
}
