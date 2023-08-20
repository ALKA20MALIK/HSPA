import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from 'src/app/model/ipropertyBase';
import { Property } from 'src/app/model/property';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
   properties: IPropertyBase[] = [];
   SellRent :number = 1;

  constructor( private housingService: HousingService, private activatedRoute: ActivatedRoute  ) {
  }
  ngOnInit(): void {

    console.log('url:', this.activatedRoute.snapshot.url.toString())
    if(this.activatedRoute.snapshot.url.toString()){
      this.SellRent=2;
    }

    this.housingService.getAllProperties(this.SellRent).subscribe(
      data => {
      this.properties = data;
      console.log(data);
    }, error => {
      console.log('httperror:');
      console.log(error);
    });
  }
    
}
