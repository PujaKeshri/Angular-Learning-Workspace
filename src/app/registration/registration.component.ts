import { Component, OnInit } from "@angular/core";
import {HttpHeaders,HttpClient} from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import {ValidationMessageService} from '../services/validation-message.service';
@Component({
    selector:'signup',
    templateUrl:'./registration.component.html'
})
export class RegistrationComponent implements OnInit{
    signupForm : FormGroup;

    constructor(private http : HttpClient, private formBuilder : FormBuilder){

    }

    ngOnInit(){
        // this.signupForm = new FormGroup({
        //     username: new FormControl(null,[Validators.required]),
        //     password : new FormControl(null,[Validators.required]),
        //     repassword : new FormControl(null,[Validators.required])
        // })

        this.signupForm = this.formBuilder.group({
            'username':['',Validators.required,ValidationMessageService.emailValidator],
            'password' :['',[Validators.required,ValidationMessageService.passwordValidator]],
            'repassword':['',[Validators.required,ValidationMessageService.passwordValidator]]
        })
    }
    
    onSubmitClick(){
        var data = this.signupForm.value;
        console.log(data);
        // const httpOptions = {
        //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        //   };
        // this.http.post('http://localhost:3000/saveUser',data,httpOptions).subscribe(result => {
        //     console.log(result);
        // },err => {
        //     console.log(err);
        // });
    }
}