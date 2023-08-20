import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IPropertyBase } from '../model/ipropertyBase';
import { Property } from '../model/property';
import { IProperty } from '../model/iproperty';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient  ) { 
  }

  getProperty(id: number){
    return this.getAllProperties(id).pipe(
      map(propertyArray =>{
        throw new Error('teststts');
        return <Property>propertyArray.find(p=>p.Id === id);
      })
    );
  }
  getAllProperties(SellRent: number): Observable<Property[]> {
    return this.http.get('data/properties.json').pipe(
      map((data: any)=> {
      const propertiesArray: Array<Property> = [];
      const localProperties = JSON.parse(localStorage.getItem('newProperty') as string);

      if (localProperties) {
        for (const Id in localProperties) {
          if(SellRent)
          {
            if (localProperties.hasOwnProperty(Id) && localProperties[Id].SellRent === SellRent) {
              propertiesArray.push(localProperties[Id]);
            }
          }
          else{
            propertiesArray.push(localProperties[Id]);
          }
        }
      }

      for (const Id in data) {
        if(SellRent)
        {
          if (data.hasOwnProperty(Id) && data[Id].SellRent === SellRent) {
            propertiesArray.push(data[Id]);
          }
        }
        else{
          propertiesArray.push(data[Id]);
        }
      }
      return propertiesArray;
      })
    );
  }

  addProperty(property: Property):void {
    let properties=[];
    if (localStorage.getItem('newProperty')) {
      properties = JSON.parse(localStorage.getItem('newProperty') as string);
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
      localStorage.setItem('PID', '1');
      return 1;
    }
  }
    
}
