import { Component, OnInit }  from '@angular/core';

import { IPatient } from './patient';
import { PatientService } from './patient.service';;

@Component({
  selector: 'my-app',
  template: `<h1>{{name}}</h1>
              <div class="has-error" *ngIf="errorMessage">{{errorMessage}}</div>
                  `,
})
export class AppComponent implements OnInit 
{ 
  
      name = 'CRUD On Openmrs using Angular 2';
      errorMessage: string;
      patients: IPatient[];

    constructor(private productService: PatientService) { }

ngOnInit(): void {
        this.productService.getPatient()
                .subscribe(patients => this.patients = patients,
                           error => this.errorMessage = <any>error);
    }


}
