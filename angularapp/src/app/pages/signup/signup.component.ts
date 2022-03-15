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
    firstname: new FormControl('',[Validators.required,Validators.minLength(3)]),
    secondname: new FormControl('',[Validators.required,Validators.minLength(3)]),
    mobile: new FormControl('',[Validators.required,Validators.maxLength(10)]),
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

  get mobile(){
    return this.registerForm.get('mobile');
  }

  get password1(){
    return this.registerForm.get('password1');
  }
  

  public user = {
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:''
  };
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  formSubmit(){
    console.log(this.user);
    // if(this.user.username == '' || this.user.username == null)
    // {
    //   //alert('User is required')
    //   this.snack.open("Username is required",'',{
    //     duration:3000
    //   });
    //   return;
    // }
    //Adding User
    this.userService.addUser(this.user).subscribe(
      (data)=>{
        //success
        console.log(data)
        //alert('success')
       // Swal.fire('Success','User is Registered','success')

      },
      // (error)=>{
      //   //error
      //   console.log(error);
      //   this.snack.open("Something went wrong !",'',{
      //     duration:3000
      //   });
      // }
    )
  }
}
