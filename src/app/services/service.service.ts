import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { 
      this.getJSON().subscribe(data => {
    });
  }

public getJSON() : Observable<any> {
    return this.http.get<any>("./assets/json/data.json");
}


loginFormSubmit:any;

//------login data or signup data-----//
setFormData(data){
this.loginFormSubmit=data;
}

getLoginFOrmData(){
  return this.loginFormSubmit;
}

}
