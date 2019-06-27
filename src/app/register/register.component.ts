import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerData = {};
  constructor(private _auth:AuthService) { }

  ngOnInit() {
  }

  registerUser(){
    console.log(this.registerData);
    this._auth.registerUser(this.registerData)
  }

}
