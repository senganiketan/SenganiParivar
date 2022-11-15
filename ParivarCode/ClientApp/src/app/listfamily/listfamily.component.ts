import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ListFamilyService } from './listfamily.service';
import { Family } from '../Model/Family';


@Component({
  selector: 'app-list-family',
  templateUrl: './listfamily.component.html'
  , styleUrls: ['listfamily.component.css'],

})


export class ListFamilyComponent {

  public family: Family[] = [];
  constructor(private createfamilyservice: ListFamilyService) { }

  ngOnInit() {

    this.createfamilyservice
      .getfamily()
      .subscribe((result: Family[]) => (this.family = result));
  }


}


