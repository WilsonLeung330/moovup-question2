import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getFriends() {
    return this.http.get('http://www.json-generator.com/api/json/get/cfdlYqzrfS')
  }
}
