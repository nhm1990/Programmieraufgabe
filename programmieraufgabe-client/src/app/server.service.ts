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

  //Main
  executeMain(number: any){
    return this.request('POST', `${environment.serverUrl}/main`, number);
  }

  savePalindromeToDb(palindrome: any){
    return this.request('POST', `${environment.serverUrl}/mainSave`, palindrome);
  }

  getPalindromes() {
    return this.request('GET', `${environment.serverUrl}/main`);
  }
}
