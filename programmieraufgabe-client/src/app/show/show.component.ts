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
  event:any;
  events: any[] = [];

  ngOnInit(): void {
    this.getEvents();
  }

  private getEvents() {
    this.server.getEvents().then((response: any) => {
      console.log('Response', response);
      this.events = response.map((ev: any) => {
        return ev;
      });
    });
  }

  addClick(){
    this.event = {
      id: 0,
      name: ""
    }
    this.ModalTitle = "Add Event";
    this.ActivateAddEditDepComp = true;
  }

  editClick(item: any){
    this.event = item;
    this.ModalTitle = "Edit Event";
    this.ActivateAddEditDepComp = true;
  }

  closeClick(){
    this.ActivateAddEditDepComp = false;
    this.getEvents();
  }

  deleteClick(item: any){
    if(confirm('Are you sure?')){
      this.server.deleteEvent(item).then(() => {
        this.getEvents();
      });
    }
  }
}
