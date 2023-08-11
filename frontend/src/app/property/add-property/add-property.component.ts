import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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
 nextButtonClicked: boolean = false;

 propertyView: IPropertyBase = {
   Id: 0,
   SellRent: 0,
   Name: '',
   PType: '',
   Price: 0,
   FType: '',
   BHK: 0,
   BuiltArea: '',
   City: '',
   RTM: ''
 };

 PropertyTypes= ['House','Apartment','Flat'];
 FurnishTypes= ['Fully','Semi','Unfurnished'];
 directionList = ['East','West','North','South']

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.CreateAddPropertyForm();
  }
  onBack(){
    this.router.navigate(['/']);
  }
  onSubmit(){ //Form : NgForm
    console.log('BasicInfo',this.addPropertyForm)
    console.log('PriceInfo',this.addPropertyForm.value.PriceInfo)

  }
  selectTab(tabId: number, IsCurrentValid: boolean){
    this.nextButtonClicked = true;
    if(IsCurrentValid){
      this.formTabs.tabs[tabId].active=true;
    }
  }
  
  CreateAddPropertyForm(){
    this.addPropertyForm = this.fb.group({
        BasicInfo:this.fb.group({
          SellRent: [null, Validators.required],
          PType: [null, Validators.required],
          Name: [null, Validators.required]
          // FType: [null, Validators.required],
          // Type: [null, Validators.required]
      }),
        PriceInfo: this.fb.group({
          Price: [null, Validators.required],
          BuiltArea: [null, Validators.required]
        })
    })
  }
  get BasicInfo(){
    return this.addPropertyForm.controls['BasicInfo'] as FormGroup;
  }
  get SellRent(){
    return this.BasicInfo.controls['SellRent'] as FormControl;
  }
}
