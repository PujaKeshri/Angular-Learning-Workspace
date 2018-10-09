
//import { HttpClient } from "@angular/common/http";

export class PersonalDetails{
	api_url = 'http://localhost:3000';
	//constructor(private http : HttpClient){
	//}
	private personalDetails =[{
		  name:"Puja",
		  email:"pujakeshri@gmail.com",
		  contact:"1423623456",
		  comments:"uff jefjepof ijfoefoefpoen werupewuewp",
		  status:true
	  },{
		  name:"Ravi",
		  email:"ravikeshri@gmail.com",
		  contact:"2323623456",
		  comments:"uff jefjepof ijfoefoefpoen werupewuewp",
		  status:false
	  },{
		  name:"Nidhi",
		  email:"Nidhikeshri@gmail.com",
		  contact:"4523623456",
		  comments:"uff jefjepof ijfoefoefpoen werupewuewp",
		  status:true
	  }];
	
	getPersonalDetails(){
		// this.http.get(`${this.api_url}/enquires?pageNo=1&size=10`);
			return this.personalDetails;
	}
}