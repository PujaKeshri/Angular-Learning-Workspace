import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
    selector:'login',
    templateUrl:'./login.component.html'
})
export class LoginComponent implements OnInit{
    @ViewChild('loginform') loginForm : NgForm;

    ngOnInit(){
        
    }

    onSubmitClick(){
        console.log(this.loginForm);
    }

}