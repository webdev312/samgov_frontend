import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatamngService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get("http://3.91.193.198:8080/ret");
  }
}
