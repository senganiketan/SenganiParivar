import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateFamilyMemberService } from './createfamilymember.service';
import { Router } from '@angular/router';
import { FamilyMember } from '../model/FamilyMember';



@Component({
  selector: 'app-create-family-member',
  templateUrl: './createfamilymember.component.html'               
  , styleUrls: ['createfamilymember.component.css'],
})



export class CreateFamilyMemberComponent {


  public familymember: FamilyMember[] = [];

  constructor(private createfamilymemberservice: CreateFamilyMemberService, private router: Router) { }

  ngOnInit(): void { }
  
  familymemberForm = new FormGroup({
    familyid: new FormControl(''),
    firstname: new FormControl('', [Validators.required]),
    fatherhusbandname: new FormControl('', [Validators.required]),
    relationid: new FormControl('1'),
    gender: new FormControl('male'),
    birthdate: new FormControl(''),
    maritalstatus: new FormControl('Single'),
    education: new FormControl(''),
    business: new FormControl(''),
    mobile: new FormControl('', [Validators.minLength(10), Validators.maxLength(10), Validators.required]),
  //  attendingprogram: new FormControl(''),
    modifiedbyid: new FormControl(''),    
  });


  get familyid(): any {
    return this.familymemberForm.get('familyid');
  }
 
  get firstname(): any {
    return this.familymemberForm.get('firstname');
  }

  get fatherhusbandname(): any {
    return this.familymemberForm.get('fatherhusbandname');
  }

  get relationid(): any {
    return this.familymemberForm.get('relationid');
  }
  get gender(): any {
    return this.familymemberForm.get('gender'); 
  }

  get birthdate(): any {
    return this.familymemberForm.get('birthdate');
  }

  get maritalstatus(): any {
    return this.familymemberForm.get('maritalstatus');
  }
  get education(): any {
    return this.familymemberForm.get('education');
  }
  get business(): any {
    return this.familymemberForm.get('business');
  }
  get mobile(): any {
    return this.familymemberForm.get('mobile');
  }

  //get attendingprogram(): any {
  //  return this.familymemberForm.get('attendingprogram');
  //}
 

  get modifiedbyid(): any {
    return this.familymemberForm.get('modifiedbyid');
  }

  onSubmitfamilyMemberForm(familymember: any) {
    console.log(this.familyid.value);
    console.log(this.firstname.value);
    console.log(this.fatherhusbandname.value);
    console.log(this.relationid.value);
    console.log(this.gender.value);
    console.log(this.birthdate.value);
 
    console.log(this.familymemberForm.status);
 

    if (this.familymemberForm.valid) {

      this.createfamilymemberservice
        .createfamilymember(familymember)     
        .subscribe({
          next: (any) =>
          {
            debugger;
            this.router.navigateByUrl('familymember-list');
            alert("family member has been added");
          },
          error: (err) => {
            console.log(err);
          }
          })
    }

  }

  
}

  
