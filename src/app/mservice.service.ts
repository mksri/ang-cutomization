import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MserviceService {

  constructor() { }

  public myData(){
    return [ "Author1","Author2","Author3"]
  }
  
}
