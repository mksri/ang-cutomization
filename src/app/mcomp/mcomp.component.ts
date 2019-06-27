import { Component, OnInit } from '@angular/core';
import { MserviceService } from '../mservice.service';

@Component({
  selector: 'app-mcomp',
  templateUrl: './mcomp.component.html',
  styleUrls: ['./mcomp.component.css']
})
export class McompComponent implements OnInit {

  isFavourite: boolean;

  constructor(private myservice: MserviceService ) { }

  
 
  myCollec = this.myservice.myData();

  onClick(){
    console.log(this.isFavourite)
    this.isFavourite = !this.isFavourite
  }

  onInputClick(data){
  console.log(data)
  }

  ngOnInit() {
  }

}
