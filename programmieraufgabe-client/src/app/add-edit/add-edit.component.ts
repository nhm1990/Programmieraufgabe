import { Component, Input, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  id: number | undefined;
  name: string | undefined;
  description: string | undefined;
  date: Date | undefined;

  address: string | undefined;
  creationDate: Date | undefined;

  constructor(private server: ServerService) { }

  events: any[] = [];
  customers: any[] = [];

  @Input() 
  event:any;

  @Input()
  customer:any;

  ngOnInit(): void {
    console.log("TEMPTESTNH63463463 this.id: " + this.customer.id);
    console.log("TEMPTESTNH63463463 this.name: " + this.customer.name);
    //this.id = this.event.id;
    //this.name = this.event.name;
    this.id = this.customer.id;
    this.name = this.customer.name;
  }

  addEvent(){
    const newEvent = {
      name: this.name,
      description: this.description,
      date: this.date,
    };
    this.server.createEvent(newEvent).then(() => {
      alert("OK");
    });
  }

  updateEvent(){
    const newEvent = {
      id: this.id,
      name: this.name,
      description: this.description,
      date: this.date,
    };
    this.server.updateEvent(newEvent).then(() => {
        alert("OK");
    });
  }

  addCustomer(){
    const newCustomer = {
      name: this.name,
      address: this.address,
      creationDate: this.creationDate,
    };
    this.server.createCustomer(newCustomer).then(() => {
      alert("OK");
    });
  }

  updateCustomer(){
    const newCustomer = {
      id: this.id,
      name: this.name,
      address: this.address,
      creationDate: this.creationDate,
    };
    this.server.updateCustomer(newCustomer).then(() => {
        alert("OK");
    });
  }
}
