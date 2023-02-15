import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { UntypedFormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FamilyService } from './family.service';
import { Family } from '../model/Family';
import { Router } from '@angular/router';
import { MatTableDataSource, } from '@angular/material/table';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { SessionStorageService } from '../service/sessionstorage.service';
import { OriginalVillage } from '../model/OriginalVillage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html'
  , styleUrls: ['family.component.css'],

})

export class FamilyComponent implements OnInit {


  family: Family[] = [];
  dataSaved = false;
  familyForm: any;
  dataSource !: MatTableDataSource<Family>;
  selection = new SelectionModel<Family>(true, []);
  allOriginalVillages!: Observable<OriginalVillage[]>;

  familyIdUpdate = null as any;
  massage = null; 
  isDisabled = false;
  isAddMemmbersbtnDisabled=false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  displayedColumns: string[] = ['PostalAddressName', 'CurrentVillage', 'CurrentDistrict', 'CurrentState', 'CurrentPincode', 'Edit'];
  /*displayedColumns: string[] = ['OriginalVillage', 'OriginalDistrict', 'PostalAddressName', 'CurrentAddress', 'CurrentVillage', 'CurrentDistrict', 'CurrentState', 'CurrentPincode', 'Edit', 'Delete'];*/
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;


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

  get residentialFacility(): any {
    return this.familyForm.get('residentialFacility');
  }

  get modifiedbyid(): any {
    return sessionStorage.getItem("session-mobile"); // We need to assign login page mobile number here.
  }

  get modifiedDate(): any {
    return new Date();
  }




  constructor(private formbulider: UntypedFormBuilder, private familyservice: FamilyService, private sessionstorage: SessionStorageService, private router: Router, private _snackBar: MatSnackBar, public dialog: MatDialog) {

    this.loadAllFamily();
  }

  ngOnInit() {
    
    this.familyForm = new FormGroup({
      originalvillage: new FormControl('', [Validators.required]),
      originaldistrict: new FormControl('Kutch'),
      currentaddress: new FormControl('', [Validators.required]),
      currentvillage: new FormControl('', [Validators.required]),
      currentdistrict: new FormControl('', [Validators.required]),
      currentstate: new FormControl('Gujarat', [Validators.required]),
      currentpincode: new FormControl('', [Validators.required, Validators.pattern('[0-9]{6}')]),
      postaladdressname: new FormControl('', [Validators.required]),
      residentialFacility: new FormControl(''),     
    });
    this.FillOriginalVillageDDL();
  }

  isAllSelected() {
    const numRows = !!this.dataSource && this.dataSource.data.length;
  }


  //Not in use because it is used in delete button
  deleteFamily(familyid: any) {
    if (confirm("Are you sure you want to delete this ?")) {
      this.familyservice.deletefamily(familyid).subscribe(() => {
        this.dataSaved = true;
        this.SavedSuccessful(2);
        this.loadAllFamily();
        this.familyIdUpdate = null;
        this.familyForm.reset();

      });
    }
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  FillOriginalVillageDDL() {
    this.allOriginalVillages = this.familyservice.getOriginalVillage();
  }

  loadAllFamily() {
    let mobile = Number(this.sessionstorage.getData("session-mobile"));
    this.familyservice.getfamilyByMobile(mobile).subscribe(data => {
      if (data.length > 0) {        
        this.sessionstorage.saveData("session-familyId", data[0].familyID);  
        this.familyForm.disable();
        this.isDisabled = true;
        this.isAddMemmbersbtnDisabled = false;
      }
      else {
        this.familyForm.enable();
        this.isDisabled = false;
        this.isAddMemmbersbtnDisabled = true;
      }
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });
  }

  ClearForm() {
    this.familyForm.reset();
  }


  onSubmitfamilyForm(family: any) {
    this.dataSaved = false;
    console.log(this.currentpincode.value);
    console.log(this.residentialFacility.value);
    console.log(this.familyForm.status);

    if (this.familyForm.valid) {
      this.CreateUpdateFamily(family);
    }
  }

  CreateUpdateFamily(family: Family) {
    family.modifiedByID = this.modifiedbyid;
    family.modifiedDate = this.modifiedDate;
    family.residentialFacility = this.residentialFacility.value == 1 ? true : false;
   
    if (this.familyIdUpdate == null) {

      this.familyservice.createfamily(family)
        .subscribe({
          next: (any) => {
            this.dataSaved = true;
            this.SavedSuccessful(1);
            this.loadAllFamily();
            this.familyIdUpdate = null;
            this.familyForm.reset();
            this.familyForm.disable();
            this.isDisabled = true;
          },
          error: (err) => {
            console.log(err);
          }
        }
        );
    }
    else {
      family.familyID = this.familyIdUpdate;

      this.familyservice.updatefamily(family).subscribe(() => {
        this.dataSaved = true;
        this.SavedSuccessful(0);
        this.loadAllFamily();
        this.familyIdUpdate = null;
        this.familyForm.reset();
        this.familyForm.disable();
        this.isDisabled = true;
      });
    }
  }



  loadFamilyToEdit(familyid: number) {
    this.familyservice.getfamilyByFamilyID(familyid).subscribe(result => {
      this.massage = null;
      this.dataSaved = false;
      this.familyIdUpdate = result.familyID;

      this.familyForm.controls['postaladdressname'].setValue(result.postalAddressName);
      this.familyForm.controls['currentaddress'].setValue(result.currentAddress);
      this.familyForm.controls['currentvillage'].setValue(result.currentVillage);
      this.familyForm.controls['currentdistrict'].setValue(result.currentDistrict);
      this.familyForm.controls['currentstate'].setValue(result.currentState);
      this.familyForm.controls['currentpincode'].setValue(result.currentPincode);
      this.familyForm.controls['originalvillage'].setValue(result.originalVillage);
      //this.familyForm.controls['originaldistrict'].setValue(result.originalDistrict);  
      this.familyForm.controls['residentialFacility'].setValue(result.residentialFacility);
      this.familyForm.enable();
      this.isDisabled = false;

    });
  }


  resetForm() {
    this.familyForm.reset();
    this.massage = null;
    this.dataSaved = false;
    this.loadAllFamily();
  }

  SavedSuccessful(isUpdate: number) {
    if (isUpdate == 0) {
      this._snackBar.open('Record Updated Successfully!', '', {
        duration: 2000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        panelClass: ['my-snack-bar']
      });
    }
    else if (isUpdate == 1) {
      this._snackBar.open('Record Saved Successfully!', '', {
        duration: 2000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        panelClass: ['my-snack-bar']
      });
    }
    else if (isUpdate == 2) {
      this._snackBar.open('Record Deleted Successfully!', '', {
        duration: 2000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        panelClass: ['my-snack-bar']
      });
    }
  }


}


