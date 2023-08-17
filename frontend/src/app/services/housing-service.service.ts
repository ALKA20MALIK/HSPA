import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IPropertyBase } from '../model/ipropertyBase';
import { Property } from '../model/property';

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

  addProperty(property: Property):void {
    let properties=[];
    if (localStorage.getItem('newProperty')) {
      properties = JSON.parse(localStorage.getItem('newProperty') as string);
      debugger
      properties = [...properties, property];
    } 
    else {
      properties = [property];
    }
    localStorage.setItem('newProperty', JSON.stringify(properties));
  }

  newPropID(){
    if(localStorage.getItem('PID')){
      localStorage.setItem('PID',String(+(localStorage.getItem('PID') as string) + 1))
      return +(localStorage.getItem('PID') as string)
    }
    else
    {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }
    
}
