import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ListFamilyMemberService } from './listfamilymember.service';
import { FamilyMember } from '../model/FamilyMember';


@Component({
  selector: 'app-list-family-member',
  templateUrl: './listfamilymember.component.html'
  , styleUrls: ['listfamilymember.component.css'],

})


export class ListFamilyMemberComponent {

  public familymember: FamilyMember[] = [];
  constructor(private createfamilymemberservice: ListFamilyMemberService) { }

  ngOnInit() {

    this.createfamilymemberservice
      .getfamilymember()
      .subscribe((result: FamilyMember[]) => (this.familymember = result));
  }


}



