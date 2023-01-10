import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FamilyMemberService } from './familymember.service';
import { FamilyMember } from '../model/FamilyMember';
import { Relation } from '../model/Relation';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatTableDataSource, } from '@angular/material/table';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { SessionStorageService } from '../service/sessionstorage.service';


@Component({
  selector: 'app-familymember',
  templateUrl: './familymember.component.html'
  , styleUrls: ['familymember.component.css'],

})

export class FamilyMemberComponent implements OnInit {

  familymember: FamilyMember[] = [];
  familymemberForm: any;
  allRelations!: Observable<Relation[]>;
  dataSaved = false;
  dataSource !: MatTableDataSource<FamilyMember>;
  selection = new SelectionModel<FamilyMember>(true, []);
  familyMemberIdUpdate = null as any;
  massage = null;
  familyID?: number;
  CountryId = null;
  StateId = null;
  CityId = null;
  SelectedDate = null;
  isMale = true;
  isFeMale = false;
  isDaughterDetailbtnDisabled = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  displayedColumns: string[] = ['firstName', 'fatherHusbandName', 'relationName', 'maritalStatus', 'mobile', 'attendingProgram', 'Edit', 'Delete'];
  //displayedColumns: string[] = ['firstName', 'fatherHusbandName', 'relationName',  'age', 'maritalStatus', 'education', 'business', 'mobile', 'attendingProgram',  'Edit', 'Delete'];
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;


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

  get age(): any {
    return this.familymemberForm.get('age');
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

  get attendingProgram(): any {
    return this.familymemberForm.get('attendingProgram');
  }

  get modifiedbyid(): any {
    return sessionStorage.getItem("session-mobile"); // We need to assign login page mobile number here.
  }


  constructor(private formbulider: UntypedFormBuilder, private familymemberservice: FamilyMemberService, private sessionstorage: SessionStorageService, private router: Router, private _snackBar: MatSnackBar, public dialog: MatDialog) {

    this.familyID = Number(sessionStorage.getItem("session-familyId"));  //this.loadAllFamily(this.familyid);// We need to set familyid from previous page 
    this.loadAllFamily();
  }



  ngOnInit() {
    this.familymemberForm = new FormGroup({
      familyid: new FormControl(this.familyID),
      firstname: new FormControl('', [Validators.required]),
      fatherhusbandname: new FormControl('', [Validators.required]),
      relationid: new FormControl('', [Validators.required]),
      gender: new FormControl('male'),
      age: new FormControl(''),
      maritalstatus: new FormControl('Single'),
      education: new FormControl(''),
      business: new FormControl(''),
      mobile: new FormControl('', [Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]),
      attendingProgram: new FormControl('1'),
      modifiedbyid: new FormControl(this.modifiedbyid)
    });
    this.FillRelationDDL();
  }

  isAllSelected() {
    const numRows = !!this.dataSource && this.dataSource.data.length;
  }


  deleteFamily(familyMemberID: any) {
    if (confirm("Are you sure you want to delete this ?")) {
      this.familymemberservice.deletefamilyMember(familyMemberID).subscribe(() => {
        this.dataSaved = true;
        this.SavedSuccessful(2);
        this.loadAllFamily();
        this.familyMemberIdUpdate = null;
        this.resetForm();

      });
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  loadAllFamily() {
    this.familymemberservice.getfamilymembers(this.familyID).subscribe(data => {
      if (data.length < 1) {
        this.familymemberForm.controls['mobile'].setValue(this.modifiedbyid);
        this.familymemberForm.controls['relationid'].setValue(1);
        this.familymemberForm.controls['mobile'].disable();
        this.familymemberForm.controls['relationid'].disable();
      }
      else {
        this.familymemberForm.controls['mobile'].enable();
        this.familymemberForm.controls['relationid'].enable();
      }
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }


  FillRelationDDL() {
    this.allRelations = this.familymemberservice.getrelation();
  }


  onSubmitfamilyMemberForm(familymember: any) {
    this.dataSaved = false;
    console.log(this.familymemberForm.status);
    if (this.familymemberForm.valid) {
      this.CreateUpdateFamily(familymember);
    }
  }

  CreateUpdateFamily(familymember: FamilyMember) {
    familymember.attendingProgram = this.familymemberForm.controls['attendingProgram'].value == "0" ? false : true;
    familymember.modifiedbyid = this.modifiedbyid;
    familymember.age = this.familymemberForm.controls['age'].value == "" ? null : this.familymemberForm.controls['age'].value;
    familymember.mobile = this.familymemberForm.controls['mobile'].value == "" ? null : this.familymemberForm.controls['mobile'].value;
    familymember.relationID = this.familymemberForm.controls['relationid'].value;


    if (this.familyMemberIdUpdate == null) {
      this.familymemberservice.createfamilyMember(familymember)
        .subscribe({
          next: (any) => {
            this.dataSaved = true;
            this.SavedSuccessful(1);
            this.loadAllFamily();
            this.familyMemberIdUpdate = null;
            this.resetForm();
          },
          error: (err) => {
            console.log(err);
          }
        }
        );
    }
    else {
      familymember.familyMemberID = this.familyMemberIdUpdate;

      this.familymemberservice.updatefamilyMember(familymember)
        .subscribe({
          next: (any) => {
            this.dataSaved = true;
            this.SavedSuccessful(0);
            this.loadAllFamily();
            this.familyMemberIdUpdate = null;
            this.resetForm();
          },
          error: (err) => {
            console.log(err);
          }
        }
        );
    }
  }

  loadFamilyToEdit(familymemberid: number) {
    this.familymemberservice.getfamilyMemberByMemberID(familymemberid).subscribe(result => {

      this.massage = null;
      this.dataSaved = false;
      this.familyMemberIdUpdate = result.familyMemberID;
      this.familymemberForm.controls['familyid'].setValue(result.familyID);
      this.familymemberForm.controls['firstname'].setValue(result.firstName);
      this.familymemberForm.controls['fatherhusbandname'].setValue(result.fatherHusbandName);
      this.familymemberForm.controls['relationid'].setValue(result.relationID);
      this.familymemberForm.controls['age'].setValue(result.age);
      this.familymemberForm.controls['maritalstatus'].setValue(result.maritalStatus);
      this.familymemberForm.controls['gender'].setValue(result.gender);
      this.familymemberForm.controls['attendingProgram'].setValue(result.attendingProgram == true ? "1" : "0");
      this.familymemberForm.controls['education'].setValue(result.education);
      this.familymemberForm.controls['business'].setValue(result.business);
      this.familymemberForm.controls['mobile'].setValue(result.mobile);

      if (result.relationID == 1) {
        this.familymemberForm.controls['mobile'].disable();
        this.familymemberForm.controls['relationid'].disable();
      }

    });
  }


  resetForm() {
    this.familymemberForm.reset();
    this.familymemberForm.controls['familyid'].setValue(this.familyID);
    this.familymemberForm.controls['gender'].setValue('male');
    this.familymemberForm.controls['attendingProgram'].setValue('1');
    this.familymemberForm.controls['maritalstatus'].setValue('Single');


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

  ClearForm() {
    this.familymemberForm.reset();
    this.familymemberForm.controls['familyid'].setValue(this.familyID);
    this.familymemberForm.controls['gender'].setValue('male');
    this.familymemberForm.controls['attendingProgram'].setValue('1');
    this.familymemberForm.controls['maritalstatus'].setValue('Single');
  }

  numberOnly(event: { which: any; keyCode: any; }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}


