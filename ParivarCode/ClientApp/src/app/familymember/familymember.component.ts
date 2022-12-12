import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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
  //familyForm: any;
  dataSource !: MatTableDataSource<FamilyMember>;
  selection = new SelectionModel<FamilyMember>(true, []);
  familyIdUpdate = null as any;
  massage = null;
  CountryId = null;
  StateId = null;
  CityId = null;
  SelectedDate = null;
  isMale = true;
  isFeMale = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  displayedColumns: string[] = ['select', 'familyMemberID', 'familyID', 'firstName', 'fatherHusbandName', 'relationID', 'gender', 'birthdate', 'maritalStatus', 'education', 'business', 'mobile', 'attendingProgram',  'Edit', 'Delete'];
  @ViewChild(MatPaginator) paginator !: MatPaginator ;
  @ViewChild(MatSort) sort !: MatSort ;


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




  constructor(private formbulider: UntypedFormBuilder, private familymemberservice: FamilyMemberService, private router: Router, private _snackBar: MatSnackBar, public dialog: MatDialog) {

    //this.loadAllFamily(this.familyid);// We need to set familyid from previous page
    this.loadAllFamily(1);    
  }

  ngOnInit() {  

    this.familymemberForm = new FormGroup({
      familyid: new FormControl(''),
      firstname: new FormControl('', [Validators.required]),
      fatherhusbandname: new FormControl('', [Validators.required]),
      relationid: new FormControl('2'),
      gender: new FormControl('male'),
      birthdate: new FormControl(''),
      maritalstatus: new FormControl('Single'),
      education: new FormControl(''),
      business: new FormControl(''),
      mobile: new FormControl('', [Validators.minLength(10), Validators.maxLength(10), Validators.required]),
      //  attendingprogram: new FormControl(''),
      modifiedbyid: new FormControl(''),
    });
    this.FillRelationDDL();
  
  }
  
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = !!this.dataSource && this.dataSource.data.length;
    return numSelected === numRows;
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(r => this.selection.select(r));
  }
  /** The label for the checkbox on the passed row */
  checkboxLabel(row: FamilyMember): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${Number(row.familyID) + 1}`;
  }


  deleteFamily(familyid: any) {
    if (confirm("Are you sure you want to delete this ?")) {
      this.familymemberservice.deletefamily(familyid).subscribe(() => {
        this.dataSaved = true;
        this.SavedSuccessful(2);
        this.loadAllFamily(familyid);
        this.familyIdUpdate = null;
        this.familymemberForm.reset();
      });
    }

  }



  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  loadAllFamily(familyid: any) {
    this.familymemberservice.getfamilymembers(familyid).subscribe(data => {
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
    familymember.modifiedByID = this.modifiedbyid;
    //familymember.modifiedDate = this.modifiedDate;
  

    if (this.familyIdUpdate == null) {
     

      this.familymemberservice.createfamily(familymember)
      .subscribe({
        next: (any) => {
          this.dataSaved = true;
          this.SavedSuccessful(1);
          this.loadAllFamily(familymember.familyID);
          this.familyIdUpdate = null;
          this.familymemberForm.reset();          
        },
        error: (err) => {
          console.log(err);
        }
      }       
      );
    }
    else {
      familymember.familyID = this.familyIdUpdate;

      this.familymemberservice.updatefamily(familymember).subscribe(() => {
        this.dataSaved = true;
        this.SavedSuccessful(0);
        this.loadAllFamily(familymember.familyID);
        this.familyIdUpdate = null;
        this.familymemberForm.reset();
      });
    }
  }



  loadFamilyToEdit(familymemberid: number) {   
    this.familymemberservice.getfamilyMemberByMemberID(familymemberid).subscribe(result => {

      console.log("result.relationID : " + result.relationID);

      this.massage = null;
      this.dataSaved = false;
      this.familyIdUpdate = result.familyID;

      this.familymemberForm.controls['familyid'].setValue(result.familyID);
      this.familymemberForm.controls['firstname'].setValue(result.firstName);
      this.familymemberForm.controls['fatherhusbandname'].setValue(result.fatherHusbandName);
      this.familymemberForm.controls['relationID'].setValue(result.relationID);
      this.familymemberForm.controls['birthdate'].setValue(result.birthdate);
      this.familymemberForm.controls['maritalstatus'].setValue(result.maritalStatus);
      this.familymemberForm.controls['gender'].setValue(result.gender);
      this.familymemberForm.controls['education'].setValue(result.education);
      this.familymemberForm.controls['business'].setValue(result.business);
      this.familymemberForm.controls['mobile'].setValue(result.mobile);
      this.familymemberForm.controls['modifiedbyid'].setValue(result.modifiedByID);
      
    });
  }


  //resetForm() {
  //  this.familyForm.reset();
  //  this.massage = null;
  //  this.dataSaved = false;
  //  this.isMale = true;
  //  this.isFeMale = false;
  //  this.loadAllFamily();
  //}

  SavedSuccessful(isUpdate: number) {
    if (isUpdate == 0) {
      this._snackBar.open('Record Updated Successfully!', 'Close', {
        duration: 2000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    }
    else if (isUpdate == 1) {
      this._snackBar.open('Record Saved Successfully!', 'Close', {
        duration: 2000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    }
    else if (isUpdate == 2) {
      this._snackBar.open('Record Deleted Successfully!', 'Close', {
        duration: 2000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    }
  }

  
}

  
