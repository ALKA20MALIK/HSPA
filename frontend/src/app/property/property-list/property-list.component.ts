import { Component, OnInit } from '@angular/core';
import { HousingServiceService } from 'src/app/services/housing-service.service';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from 'src/app/model/ipropertyBase';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
   properties: IPropertyBase[] = [];
   SellRent :number = 1;

  constructor( private housingService: HousingServiceService, private activatedRoute: ActivatedRoute  ) {
  }
  ngOnInit(): void {

    console.log('url:', this.activatedRoute.snapshot.url.toString())
    if(this.activatedRoute.snapshot.url.toString()){
      this.SellRent=2;
    }

     this.housingService.getAllProperties(this.SellRent)
    .subscribe(data=>{
      this.properties = data;
      debugger
      const newProperty = JSON.parse(localStorage.getItem('newProperty') as string);

      if(newProperty[0].SellRent === this.SellRent){
        this.properties = [newProperty, ...this.properties]
      }
      
    },
      error=> {
        console.log(error);
      }
    );
  }
}
