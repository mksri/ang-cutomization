import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-app';

  data: any = {};

  onSubmit(f) {
    console.log(f);
    //alert(JSON.stringify(this.data));
  }

  
  

  constructor(){
    
  }
  ngOnInit() {
   
}

}
