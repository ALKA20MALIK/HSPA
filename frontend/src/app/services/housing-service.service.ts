import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HousingServiceService {

  constructor(private http: HttpClient  ) { 
  }
  getAllProperties(){
    return this.http.get('data/properties.json');
  }
}
