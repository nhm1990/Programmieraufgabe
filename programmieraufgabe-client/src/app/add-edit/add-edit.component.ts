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
  address: string | undefined;
  creationDate: Date | undefined;

  constructor(private server: ServerService) { }

  customers: any[] = [];

  @Input()
  customer:any;

  ngOnInit(): void {
    console.log("TEMPTESTNH63463463 this.id: " + this.customer.id);
    console.log("TEMPTESTNH63463463 this.name: " + this.customer.name);
    this.id = this.customer.id;
    this.name = this.customer.name;
    this.address = this.customer.address;
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
