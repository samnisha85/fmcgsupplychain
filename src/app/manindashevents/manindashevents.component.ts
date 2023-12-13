import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manindashevents',
  templateUrl: './manindashevents.component.html',
  styleUrls: ['./manindashevents.component.scss']
})
export class ManindasheventsComponent implements OnInit {
  sidebarExpanded = true;
  events:any;
  @Input() event: any;
  constructor(public modalService:NgbModal,public datePipe:DatePipe,public http:HttpClient) {
    this.from();
    this.to();
    this.eventList();
   }

  ngOnInit(): void {
  }
  open(content:any) {
		this.modalService.open(content);
	}
  fromDate:any;
  toDate:any;
  from(){        
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate()-10);
    console.log(yesterday);
    this.fromDate = this.datePipe.transform(yesterday, 'yyyy-MM-dd');
    this.toDate=this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    console.log(this.fromDate); 
  }
  to(){
    let lastweek = new Date();
    lastweek.setDate(lastweek.getDate()-7);
    console.log(lastweek);
    this.fromDate = this.datePipe.transform(lastweek, 'yyyy-MM-dd');
    this.toDate=this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    console.log(this.fromDate); 
  }
  eventList(){
    this.http.get('/api/myEvents').subscribe(
      (data: any) => {
      this.events = data;
      console.log(this.events)
      },
      error => {
      console.error('Error fetching events:', error);
      }
      );
  }
  dataURI(base64String: string) {
    return 'data:image/png;base64,' + base64String;
  }
}
