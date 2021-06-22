import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private server: ServerService) { }

  ModalTitle:string | undefined;
  ActivateAddEditDepComp:boolean = false;
  palindromes: any[] = [];

  ngOnInit(): void {
    this.getPalindromes();
  }

  getPalindromes() {
    this.server.getPalindromes().then((response: any) => {
      console.log('Response', response);
      this.palindromes = response.map((ev: any) => {
        return ev;
      });
    });
  }
}
