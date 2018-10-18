import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
    selector:'login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})
export class LoginComponent implements OnInit{
    @ViewChild('profilepicform') profilepicForm : NgForm;
    @ViewChild('loginform') loginForm : NgForm;
    defaultImg : string = "../assets/images/male.png";
    imageSrc : string = this.defaultImg;
    ngOnInit(){
        
    }

    onFileChanged(event){
      //  console.log(event);
      //  console.log(this.profilepicForm.value);
        const file :File = event.target.files[0];
        const reader = new FileReader();
        reader.onload = this.handleReaderLoad.bind(this);
        reader.onerror = this.handleReaderError.bind(this);
        reader.readAsDataURL(file);
       // console.log("Url : "+URL.createObjectURL(file));
        //  console.log("File : "+URL.revokeObjectURL(URL.createObjectURL(file)));
    }

    handleReaderLoad(e){
        console.log("In side handleReaderLoad");
        console.log(e.target.result);
        console.log(btoa(e.target.result));
        console.log(atob(btoa(e.target.result)));
        this.imageSrc = e.target.result;
    }

    handleReaderError(e){
        console.log("In side handleReaderError");
        this.imageSrc = this.defaultImg;
    }

    onSubmitClick(){
        console.log(this.loginForm);
        console.log(this.loginForm.value);
    }

}