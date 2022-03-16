import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm= new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    username: new FormControl('',[Validators.required,Validators.minLength(3)]),
    mobileNumber: new FormControl('',[Validators.required,Validators.maxLength(10)]),
    password1: new FormControl('',[Validators.required,Validators.minLength(5)]),
  })

  get dropdown(){
    return this.registerForm.get('dropdown');
  }

  get email(){
    return this.registerForm.get('email');
  }

  get username(){
    return this.registerForm.get('username');
  }

  get firstname(){
    return this.registerForm.get('firstname');
  }

  get secondname(){
    return this.registerForm.get('secondname');
  }

  get mobileNumber(){
    return this.registerForm.get('mobileNumber');
  }

  get password1(){
    return this.registerForm.get('password1');
  }
  

  public user = {
    username:'',
    password:'',
    email:'',
    mobileNumber:''
  };
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null)
    {
      //alert('User is required')
     
      return;
    }
    //Adding User
    this.userService.addUser(this.user).subscribe(
      (data)=>{
        //success
        console.log(data)
        alert('success')
        

      },
      (error)=>{
        //error
        console.log(error);
       
      }
    )
  }
}