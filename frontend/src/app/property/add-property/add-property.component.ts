import { NgFor } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
 @ViewChild('Form') propertyForm!: NgForm;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onBack(){
    this.router.navigate(['/']);
  }
  onSubmit(){ //Form : NgForm
    console.log('submitted',this.propertyForm)
  }

}
