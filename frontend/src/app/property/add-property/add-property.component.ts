import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/model/ipropertyBase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
 //@ViewChild('Form') propertyForm!: NgForm;
 @ViewChild('FormTabs') formTabs!: TabsetComponent;
 
 addPropertyForm!: FormGroup;
 nextClicked: boolean = false;

 propertyView: IPropertyBase = {
  Id: null,
  Name: '',
  Price: null,
  SellRent: null,
  PType: '',
  FType: '',
  BHK: null,
  BuiltArea: '',
  City: '',
  RTM: ''
};

 propertyTypes= ['House','Apartment','Flat'];
 furnishTypes= ['Fully','Semi','Unfurnished'];
 directionList = ['East','West','North','South']

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.CreateAddPropertyForm();
  }
  onBack(){
    this.router.navigate(['/']);
  }
  onSubmit(){ 
    this.nextClicked = true;
    if(this.BasicInfo.invalid){
      this.formTabs.tabs[0].active = true;
      return;
    }
    if(this.PriceInfo.invalid){
      this.formTabs.tabs[1].active = true;
      return;
    }

    console.log('BasicInfo',this.addPropertyForm)
    console.log('PriceInfo',this.addPropertyForm.value.PriceInfo)

  }

  selectTab(nextTabId: number, IsCurrentValid: boolean){
    this.nextClicked = true;
    if(IsCurrentValid){
      this.formTabs.tabs[nextTabId].active=true;
      this.nextClicked = false;
    }
  }

  CreateAddPropertyForm() {
    this.addPropertyForm = this.fb.group({
      BasicInfo: this.fb.group({
        SellRent: [1, Validators.required],
        PType: [null, Validators.required],
        Name: [null, Validators.required]
      }),
      PriceInfo: this.fb.group({
        Price: [null, Validators.required],
        BuiltArea: [null, Validators.required]
      })
    });
  }

  // -------------------
  // Getter Methods
  // -------------------
  get BasicInfo() {
    return this.addPropertyForm.controls['BasicInfo'] as FormGroup;
  }

  get PriceInfo() {
    return this.addPropertyForm.controls['PriceInfo'] as FormGroup;
  }

  get SellRent() {
    return this.BasicInfo.controls['SellRent'] as FormControl;
  }

  get Price(){
  return this.PriceInfo.controls['Price'] as FormControl
  }
  
  get BuiltArea(){
    return this.PriceInfo.controls['BuiltArea'] as FormControl
  }
}
