import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    
    constructor(private http : HttpClient){

    }

    ngOnInit(){
        
    }

    onFileChanged(event){
      //  console.log(event);
      //  console.log(this.profilepicForm.value);
        const file :File = event.target.files[0];
        console.log(file);
        const reader = new FileReader();
        reader.onload = this.handleReaderLoad.bind(this);
        reader.onerror = this.handleReaderError.bind(this);
        reader.readAsDataURL(file);
       // console.log("Url : "+URL.createObjectURL(file));
       // console.log("File : "+URL.revokeObjectURL(URL.createObjectURL(file)));
        /* this.http.post('http://localhost:3000/fileUpload',file).subscribe(result=>{
             console.log(result);
         },err=>{
             console.log(err);
         })*/
    }

    handleReaderLoad(e){
        console.log("In side handleReaderLoad");
        console.log(e.target);
      //  console.log(btoa(e.target.result));
     //   console.log(atob(btoa(e.target.result)));
        this.imageSrc = e.target.result;
    }

    handleReaderError(e){
        console.log("In side handleReaderError");
        this.imageSrc = this.defaultImg;
    }

    onSubmitClick(){
        console.log(this.loginForm);
       let user = this.loginForm.value.username;
       let pws = this.loginForm.value.password;
       let url = 'http://localhost:3000/checkUser?user='+user+'&pws='+pws;
       this.http.get(url).subscribe(result=>{
            console.log(result);
       },err=>{
            console.log(err);
       })
    }

    onRegistration(){
        console.log(this.loginForm);
        var data = this.loginForm.value;
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
          };
        this.http.post('http://localhost:3000/saveUser',data,httpOptions).subscribe(result => {
            console.log(result);
        },err => {
            console.log(err);
        });
    }

}