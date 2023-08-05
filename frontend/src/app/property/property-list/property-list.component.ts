import { Component, OnInit } from '@angular/core';
import { HousingServiceService } from 'src/app/services/housing-service.service';
import { IProperty } from '../IProperty';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
   properties: IProperty[] = [];
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
    },error=> {
      console.log(error);
    }
    );
  }
}
