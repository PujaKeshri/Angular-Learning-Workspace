import { Component, Input, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationMessageService} from '../services/validation-message.service';

@Component({
    selector: 'control-message',
    templateUrl: 'control-message.component.html'
})
export class ControlMessageComponent implements 
OnInit,
AfterViewInit,
AfterViewChecked{

    @Input('control') formControl : FormControl;
    
    ngOnInit(){
        console.log('ngOnInit called!');
    }
    ngAfterViewInit(){
        console.log('ngAfterViewInit called!');
    }

    ngAfterViewChecked() {
        console.log('ngAfterViewChecked called!');
    }

    get errorMessage(){
        for(let propertyName in this.formControl.errors){
            if(this.formControl.errors.hasOwnProperty(propertyName) && this.formControl.touched){
                return ValidationMessageService.getValidationErrormessage(propertyName,this.formControl.errors[propertyName]);
            }
        }
        return null;
    }
       

}