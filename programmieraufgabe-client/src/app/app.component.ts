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
  //resultArr: any[] = [];
  input: any | undefined;
  result: any | undefined;
  numberOfCylces: any | undefined;
  isShown = false;

  ngOnInit() {

  }

  executeMain(){
    var numberObj = {
      input: this.input
    };
    console.log("TEMPTESTNH273273 this.input: " + this.input);
    this.server.executeMain(numberObj).then((response: any) => {
      console.log('Response', response);
        this.result = response;
    });
  }

  savePalindromeToDb(){
    var palindromeObj = {
      input: this.input,
      result: this.result,
      numberOfCycles: this.numberOfCylces
    }
    this.server.savePalindromeToDb(palindromeObj).then(() => {
      alert("OK");
    });
  }

  showPalindromes(){
    this.isShown = true;
  }
}

