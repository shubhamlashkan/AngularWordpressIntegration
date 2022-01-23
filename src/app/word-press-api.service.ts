import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordPressAPIService {

  constructor(private http:HttpClient) { }

  baseUrl: String = 'https://guideformaths.azurewebsites.net//wp-json/wp/v2/';

  getAllPosts():Observable<any>
  {
    return this.http.get(this.baseUrl+'posts');
  }
  getPostById(id:String):Observable<any>
  {
    let url = `https://guideformaths.azurewebsites.net//wp-json/wp/v2/posts/${id}`;
    return this.http.get(url);
  }
}
