import { Component, OnInit } from '@angular/core';
import {PersonalDetails} from '../services/personal-details.service';
import { Sorting } from '../services/sorting.service';
import {HttpClient} from '@angular/common/http';
import {iPersonalDetails} from '../interfaces/personal-details-interface';

@Component({
  selector: 'enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {
	
  personalDetails : iPersonalDetails[] = [];
  private FieldList : [{field:'name',flag:'false'},{field:'email',flag:'false'},{field:'contact',flag:'false'}];
  selectedPage:number = 1;
  pagesize : number = 5;
  constructor(private personalDetailsServices : PersonalDetails, private sorting : Sorting, private http : HttpClient) { 
  
  }

  ngOnInit() {
  	console.log("Inside MyFirstComponentComponent onInit");
    this.personalDetails = this.personalDetailsServices.getPersonalDetails();
    this.getEnquiryDetails(this.selectedPage);
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

    
    onPageClick(num : any){
      if(typeof num === "string"){
          console.log("page Type : string , Page No : " + num);
          if(num == 'prev'){
            if(this.selectedPage >= 1)
                this.selectedPage -= 1;
          }else if(num == 'next'){
            this.selectedPage += 1;
          }
      }else if(typeof num === "number"){
        console.log("page Type : number , Page No : " + num);
        this.selectedPage = num;
      }
      this.getEnquiryDetails(this.selectedPage);
    }

    getEnquiryDetails(pageno : number){
      this.http.get<iPersonalDetails[]>(`http://localhost:3000/enquires?pageNo=${pageno}&size=${this.pagesize}`).subscribe(data => {
      this.personalDetails = data;
    },err => {
      console.log("Error occured : "+err);
    });
    }
}
