import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manindashadvt',
  templateUrl: './manindashadvt.component.html',
  styleUrls: ['./manindashadvt.component.scss']
})
export class ManindashadvtComponent implements OnInit {
  sidebarExpanded = true;

  constructor(public modalService:NgbModal,public datePipe:DatePipe) {
    this.from();
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
    yesterday.setDate(yesterday.getDate());
    console.log(yesterday);
    this.fromDate = this.datePipe.transform(yesterday, 'yyyy-MM-dd');
    this.toDate=this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    console.log(this.fromDate); 
  }
  
}
