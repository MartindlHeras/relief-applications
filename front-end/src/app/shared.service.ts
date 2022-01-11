import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://127.0.0.1:8000" 

  constructor(private http:HttpClient) { }

  getHistoryList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/history/');
  }

  addHistory(val:any){
    return this.http.post(this.APIUrl + '/history/', val);
  }

  getBookmarksList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/bookmarks/');
  }

  addBookmarks(val:any){
    return this.http.post(this.APIUrl + '/bookmarks/', val);
  }
}
