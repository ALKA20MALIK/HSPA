import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/model/ipropertyBase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
 @ViewChild('Form') propertyForm!: NgForm;
 @ViewChild('FormTabs') formTabs!: TabsetComponent;
 
 propertyView: IPropertyBase = {
   Id: 0,
   SellRent: 0,
   Name: '',
   PType: '',
   Price: 0,
   FType: 0,
   BHK: 0,
   BuiltArea: '',
   City: '',
   RTM: ''
 };

 PropertyTypes= ['House','Apartment','Flat'];
 FurnishTypes= ['Fully','Semi','Unfurnished'];
 directionList = ['East','West','North','South']

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onBack(){
    this.router.navigate(['/']);
  }
  onSubmit(){ //Form : NgForm
    console.log('submitted',this.propertyForm)
  }
  selectTab(tabId: number){
    this.formTabs.tabs[tabId].active=true;
  }

}
