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

  constructor(private server: ServerService) { }

  events: any[] = [];

  @Input() 
  event:any;

  ngOnInit(): void {
    console.log("TEMPTESTNH63463463 this.id: " + this.event.id);
    console.log("TEMPTESTNH63463463 this.name: " + this.event.name);
    this.id = this.event.id; //init variables from event passed from @Input show-dep -> add-edit-dep
    this.name = this.event.name;
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
}
