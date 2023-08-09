import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IPropertyBase } from '../model/ipropertyBase';

@Injectable({
  providedIn: 'root'
})
export class HousingServiceService {

  constructor(private http: HttpClient  ) { 
  }
  getAllProperties(SellRent: number):Observable<IPropertyBase[]>{
    return this.http.get('data/properties.json')
    .pipe(
      map((data: any) =>{
        const properties: IPropertyBase[] = [];
        for(const id in data){
          if(data.hasOwnProperty(id) && data[id].SellRent === SellRent)
          {
            properties.push(data[id]);
          }
        }
        return properties;
    }));
  }
}
