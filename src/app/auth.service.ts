import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Service provider class
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api_key = 'b6d385a7145046f9a0bd57733ccfc67b';

  private _registerUrl = "http://localhost:3000/api/register"

  constructor(private http:HttpClient) { }

  initSources(){
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
 }
 initArticles(){
  return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
 }
 getArticlesByID(source: String){
  return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
 }

registerUser(user){
 return this.http.post<any>(this._registerUrl,user)
 .subscribe(
   res => console.log(res),
   err => console.log(err)
 )
 

  }
}
