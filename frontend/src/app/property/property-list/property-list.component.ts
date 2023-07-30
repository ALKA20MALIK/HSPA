import { Component, OnInit } from '@angular/core';
import { HousingServiceService } from 'src/app/services/housing-service.service';
import { IProperty } from '../IProperty';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
   properties: IProperty[] = [];

  constructor( private housingService: HousingServiceService  ) {
  }
  ngOnInit(): void {
     this.housingService.getAllProperties()
    .subscribe(data=>{
      this.properties = data;
    },error=> {
      console.log(error);
    }
    );
  }
}
