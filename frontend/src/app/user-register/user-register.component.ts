import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm!: FormGroup;
  user!: User;
  userSubmitted: boolean = false;
  constructor(private fb : FormBuilder, private userService: UserService, 
    private notification: NotificationService) { }

  ngOnInit() {
    this.createRegistrationForm();
    // this.registrationForm = new FormGroup({
    //   userName: new FormControl('Mark', Validators.required),
    //   email: new FormControl(null, [Validators.required,Validators.email]),
    //   password: new FormControl(null, [Validators.required,Validators.minLength(8)]),
    //   confirmPassword: new FormControl(null, Validators.required),
    //   mobile: new FormControl(null, [Validators.required,Validators.minLength(10)]),
    // }, this.passwordMatchingValidator);
  }

  createRegistrationForm(){
    this.registrationForm = this.fb.group({
      userName : [null, Validators.required],
      email : [null, [Validators.required, Validators.email]],
      password : [null,[Validators.required,Validators.minLength(8)]],
      confirmPassword : [null, Validators.required],
      mobile : [null, [Validators.required,Validators.minLength(10)]]
    }, { Validators: this.passwordMatchingValidator })
  }

  passwordMatchingValidator(fc: AbstractControl): ValidationErrors | null {
    return fc.get('password')?.value === fc.get('confirmPassword')?.value ? null :
      { notMatched: true }
  };

  // get methods for all formcontrols
  get userName(){
    return this.registrationForm.get('userName') as FormControl;
  }
  get email(){
    return this.registrationForm.get('email') as FormControl;
  }
  get password(){
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword(){
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }
  userData(): User{
    return this.user = {
      userName : this.userName.value,
      email : this.email.value,
      password : this.password.value,
      mobile : this.mobile.value,
    }
  }
  onSubmit(){
    console.log(this.registrationForm);
    //this.user= Object.assign(this.user,this.registrationForm.value);
    this.userSubmitted =true;
    if(this.registrationForm.valid){
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted =false;
      this.notification.success('User is saved successfully.');
    }
    else{
      this.notification.error('Form is not valid.')
    }
  }
}
