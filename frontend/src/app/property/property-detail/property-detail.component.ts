import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  public propertyId!: number;
  property =  new Property();

  constructor(private activatedRoute:ActivatedRoute,
    private router: Router , private housingService : HousingService) 
  {
  }

  ngOnInit() 
  {
    this.activatedRoute.data.subscribe(data => {
        console.log('Check route resolver data')
        console.log(data)
      // {routeResolver: 'No dataError: teststts'}routeResolver: "No dataError: teststts"[[Prototype]]: Object
    },
    error =>{
      debugger
      this.router.navigate(['/']);
    });

    // this.activatedRoute.params.subscribe(params=>{
    //   this.propertyId = +params['id'];
    //   this.housingService.getProperty(this.propertyId)
    //   .subscribe((data :any)=>{
    //     this.property = data;
    //   }, 
    //   error =>{
    //     this.router.navigate(['/']);
    //   });
    // });
  }
  
  onSelectNext(){
    this.propertyId +=1;
    this.router.navigate(['property-detail',this.propertyId]);
  }
}
