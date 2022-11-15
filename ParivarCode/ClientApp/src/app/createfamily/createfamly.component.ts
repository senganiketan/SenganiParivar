import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreatefamilyService } from './createfamily.service';
import { Family } from './Family';


@Component({
  selector: 'app-create-family',
  templateUrl: './createfamily.component.html'
  , styleUrls: ['createfamly.component.css'],

})



export class CreatefamilyComponent {

  public family: Family[] = [];
  constructor(private createfamilyservice: CreatefamilyService) { }

  ngOnInit() {
  
    this.createfamilyservice
      .getfamily()
      .subscribe((result: Family[]) => (this.family = result));
  }

  
  familyForm = new FormGroup({
    //firstname: new FormControl('', [Validators.required]),
    //fatherhusbandname: new FormControl('', [Validators.required]),
    //relation: new FormControl('', [Validators.required]),
    //gender: new FormControl('1', [Validators.required]),
    //birthdate: new FormControl(''),
    //maritalstatus: new FormControl('Single'),

    //education: new FormControl(''),
    //business: new FormControl(''),
    //mobile: new FormControl('', [Validators.required]),
    originalvillage: new FormControl(''),
    originaldistrict: new FormControl(''),
    currentaddress: new FormControl(''),
    currentvillage: new FormControl(''),
    currentdistrict: new FormControl(''),
    currentstate: new FormControl('gujarat'),
    currentpincode: new FormControl('')  
  });

 

 
  //get firstname(): any {
  //  return this.familyForm.get('firstname');
  //}

  //get fatherhusbandname(): any {
  //  return this.familyForm.get('fatherhusbandname');
  //}

  //get relation(): any {
  //  return this.familyForm.get('relation');
  //}
  //get gender(): any {
  //  return this.familyForm.get('gender'); 
  //}

  //get birthdate(): any {
  //  return this.familyForm.get('birthdate');
  //}

  //get maritalstatus(): any {
  //  return this.familyForm.get('maritalstatus');
  //}
  //get education(): any {
  //  return this.familyForm.get('education');
  //}
  //get business(): any {
  //  return this.familyForm.get('business');
  //}
  //get mobile(): any {
  //  return this.familyForm.get('mobile');
  //}

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

    
  onSubmitfamilyForm() {

    console.log(this.originalvillage.value);
    console.log(this.originaldistrict.value);
    console.log(this.currentvillage.value);
    console.log(this.currentdistrict.value);
    console.log(this.currentstate.value);
    console.log(this.currentpincode.value);
 
    console.log(this.familyForm.status);

    
  }

  
}

  
