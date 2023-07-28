import { Component, OnInit } from '@angular/core';
import { HousingServiceService } from 'src/app/services/housing-service.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: any = [];

  constructor( private housingService: HousingServiceService  ) {
  }
  ngOnInit(): void {
    this.housingService.getAllProperties()
    .subscribe(response=>{
      this.properties = response;
    }, 
    error=>{
      console.log(error)
    })
  }
}
