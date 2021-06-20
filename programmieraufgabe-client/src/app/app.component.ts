import { Component } from '@angular/core';
import { ServerService } from './server.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private server: ServerService) { }
  
  resultArr = [];

  ngOnInit() {

  }

  executeMain(){
    this.server.executeMain().then((response: any) => {
      console.log('Response', response);
      this.resultArr = response.map((arr: any) => {
        return arr;
      });
    });
  }
}

