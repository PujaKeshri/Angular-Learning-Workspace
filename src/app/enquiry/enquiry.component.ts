import { Component, OnInit } from '@angular/core';
import {PersonalDetails} from '../services/personal-details.service';
import { Sorting } from '../services/sorting.service';

@Component({
  selector: 'enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class Enquiry implements OnInit {
	
  personalDetails : {name:string, email:string, contact:string, comments:string, status:string}[] = [];
  private FieldList : [{field:'name',flag:'false'},{field:'email',flag:'false'},{field:'contact',flag:'false'},{field:'status',flag:'false'}];
	selectedPage:number = 1;
  constructor(private personalDetailsServices : PersonalDetails, private sorting : Sorting) { 
  
  }

  ngOnInit() {
  	console.log("Inside MyFirstComponentComponent onInit");
  	this.personalDetails = this.personalDetailsServices.getPersonalDetails();
  }

  sort(field:string){
    console.log("you selected field : "+field);
    this.displayPerson();
    this.sorting.sortObject(this.personalDetails,field);
    //this.sortPerson(field);
    this.displayPerson();
  }
  
  displayPerson(){
    for(let i=0;i<this.personalDetails.length;i++){
      var person = this.personalDetails[i];
      for(let key in person)
        console.log(key + ":" + person[key]);
    }
    console.log("");
  }

  sortPerson(field : string){
    this.personalDetails.sort(function(a:any,b:any){
            let aVal = a[field];
            let bVal = b[field];
            if(aVal<bVal)
                return -1;
            else if(aVal>bVal)
                return 1;
            else
                return 0;
        });
    }

    onPreviousClick(){
      if(this.selectedPage >= 1)
          this.selectedPage -= 1;
    }

    onFirstClick(){
        this.selectedPage = 1;
    }

    onSecondClick(){
      this.selectedPage = 2;
    }

    onThirdClick(){
      this.selectedPage = 3;
    }

    onFourthClick(){
      this.selectedPage = 4;
    }

    onNextClick(){
        this.selectedPage += 1;
    }
}
