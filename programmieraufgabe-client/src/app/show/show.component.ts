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

  customer:any;
  customers: any[] = [];

  ngOnInit(): void {
    this.getCustomers();
  }

  private getCustomers() {
    this.server.getCustomers().then((response: any) => {
      console.log('Response', response);
      this.customers = response.map((ev: any) => {
        return ev;
      });
    });
  }

  addClick(){
    this.customer = {
      id: 0,
      name: ""
    }
    this.ModalTitle = "Add Customer";
    this.ActivateAddEditDepComp = true;
  }

  editClick(item: any){
    this.customer = item;
    this.ModalTitle = "Edit Customer";
    this.ActivateAddEditDepComp = true;
  }

  closeClick(){
    this.ActivateAddEditDepComp = false;
    this.getCustomers();
  }

  deleteClick(item: any){
    if(confirm('Are you sure?')){
      this.server.deleteCustomer(item).then(() => {
        this.getCustomers();
      });
    }
  }
}
