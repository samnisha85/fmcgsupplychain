import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html',
  styleUrls: ['./maindashboard.component.scss']
})
export class MaindashboardComponent implements OnInit {
  sidebarExpanded = true;

	constructor(private modalService: NgbModal) {
    
  }
  ngOnInit(): void {
    
  }

  myfunction(){
    let fullId = document.getElementById("id1") as HTMLElement;
 fullId.style.display='none';
 let fullId1 = document.getElementById("id2") as HTMLElement;
    fullId1.style.display='block';
  }
  backfunction(){
    let fullId3 = document.getElementById("id2") as HTMLElement;
 fullId3.style.display='none';
 let fullId = document.getElementById("id3") as HTMLElement;
 fullId.style.display='none';
 let fullId4 = document.getElementById("id1") as HTMLElement;
    fullId4.style.display='block';
  }
  nextfunction(){
    let fullId3 = document.getElementById("id2") as HTMLElement;
 fullId3.style.display='none';
 let fullId = document.getElementById("id1") as HTMLElement;
 fullId.style.display='none';
 let fullId4 = document.getElementById("id3") as HTMLElement;
    fullId4.style.display='block';
  }
  backfunction1(){
    let fullId3 = document.getElementById("id2") as HTMLElement;
 fullId3.style.display='block';
 let fullId = document.getElementById("id1") as HTMLElement;
 fullId.style.display='none';
 let fullId4 = document.getElementById("id3") as HTMLElement;
    fullId4.style.display='none';
  }
  customques(){
    let fullId5 = document.getElementById("id5") as HTMLElement;
    fullId5.style.display='block';
    let fullId6 = document.getElementById("id4") as HTMLElement;
    fullId6.style.display='block';
  }
  open(content:any) {
		this.modalService.open(content);
	}
}
