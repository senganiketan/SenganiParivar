import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FamilyService } from './family.service';
import { Family } from '../model/Family';
import { Router } from '@angular/router';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html'
  , styleUrls: ['family.component.css'],

})

export class FamilyComponent {
  public family: Family[] = [];
  constructor(private familyservice: FamilyService, private router: Router) { }
  ngOnInit(): void { }  
  familyForm = new FormGroup({   
    originalvillage: new FormControl('', [Validators.required]),
    originaldistrict: new FormControl('', [Validators.required]),
    currentaddress: new FormControl('', [Validators.required]),
    currentvillage: new FormControl('', [Validators.required]),
    currentdistrict: new FormControl('', [Validators.required]),
    currentstate: new FormControl('gujarat', [Validators.required]),
    currentpincode: new FormControl('', [Validators.maxLength(5)]),
    postaladdressname: new FormControl('', [Validators.required]),
    residentialfacility: new FormControl(''),   
    modifiedbyid: new FormControl(''),    
  }); 

  get originalvillage(): any {
    return this.familyForm.get('originalvillage');
  }
  get originaldistrict(): any {
    return this.familyForm.get('originaldistrict');
  }
  get currentaddress(): any {
    return this.familyForm.get('currentaddress');
  }
  get currentvillage(): any {
    return this.familyForm.get('currentvillage');
  }

  get currentdistrict(): any {
    return this.familyForm.get('currentdistrict');
  }

  get currentstate(): any {
    return this.familyForm.get('currentstate');
  }

  get currentpincode(): any {
    return this.familyForm.get('currentpincode');
  }

  get postaladdressname(): any {
    return this.familyForm.get('postaladdressname');
  }

  get residentialfacility(): any {
    return this.familyForm.get('residentialfacility');
  }

  get modifiedbyid(): any {
    return this.familyForm.get('modifiedbyid');
  }

  onSubmitfamilyForm(family: any) {

    //console.log(this.originalvillage.value);
    //console.log(this.originaldistrict.value);
    //console.log(this.currentvillage.value);
    //console.log(this.currentdistrict.value);
    //console.log(this.currentstate.value);
    console.log(this.currentpincode.value);
    console.log(this.residentialfacility.value);

    console.log(this.familyForm.status);
 

    if (this.familyForm.valid) {

      this.familyservice
        .createfamily(family)     
        .subscribe({
          next: (any) =>
          {
            this.router.navigateByUrl('family-list');
            alert("family has been added");
          },
          error: (err) => {
            console.log(err);
          }
          })
    }    
  }

  
}

  
