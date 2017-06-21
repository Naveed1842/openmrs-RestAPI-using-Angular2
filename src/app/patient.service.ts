import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { IPatient } from './patient';

@Injectable()
export class PatientService 
{
   //link to my localhost machine
    private baseUrl = 'http://localhost:8092/openmrs-standalone/ws/rest/v1/concept';

    constructor(private http: Http) { }

    getPatient():Observable<IPatient[]> 
    {
           let username: string = 'admin';
          let password: string = 'Admin123';
          let body = JSON.stringify({username,password});
       let headerOptions = {
                              'Accept': `application/json`,
                               'Access-Control-Allow-Credentials': 'true',
                               'Authorization': 'Basic ' + btoa(username + ":" + password)
                              };
   let headers = new Headers(headerOptions );
  


        return this.http.get(this.baseUrl,{ headers:headers})
            .map(this.extractData)
            .do(data => console.log('getPatients: ' + JSON.stringify(data)))
            .catch(this.handleError);
            
    }
    
    private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }
   
     private handleError(error: Response): Observable<any> {
         console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}