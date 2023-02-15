import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DaughterDetailService } from './daughterdetail.service';
import { DaughterDetail } from '../model/DaughterDetail';
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
  selector: 'app-daughterdetail',
  templateUrl: './daughterdetail.component.html'
  , styleUrls: ['daughterdetail.component.css'],
})

export class DaughterDetailComponent implements OnInit {

  daughterdetail: DaughterDetail[] = [];
  daughterdetailForm: any;
  allRelations!: Observable<Relation[]>;
  dataSaved = false;
  dataSource !: MatTableDataSource<DaughterDetail>;
  selection = new SelectionModel<DaughterDetail>(true, []);
  daughterDetailIdUpdate = null as any;
  massage = null;
  familyID?: number;
  sessionmobile: number;



  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  displayedColumns: string[] = ['firstName', 'husbandName', 'relationName', 'age', 'mobile', 'alive', 'Edit', 'Delete'];//'attendingProgram',
  //displayedColumns: string[] = ['firstName', 'fatherInLawName','husbandName', 'relationName',  'age', 'mobile', 'attendingProgram',  'Edit', 'Delete'];
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;


  get familyid(): any {
    return this.daughterdetailForm.get('familyid');
  }

  get firstname(): any {
    return this.daughterdetailForm.get('firstname');
  }

  get husbandname(): any {
    return this.daughterdetailForm.get('husbandname');
  }

  get relationid(): any {
    return this.daughterdetailForm.get('relationid');
  }
  get fatherInLawName(): any {
    return this.daughterdetailForm.get('fatherInLawName');
  }

  get age(): any {
    return this.daughterdetailForm.get('age');
  }

  get surname(): any {
    return this.daughterdetailForm.get('surname');
  }
  get village(): any {
    return this.daughterdetailForm.get('village');
  }

  get mobile(): any {
    return this.daughterdetailForm.get('mobile');
  }

  get attendingProgram(): any {
    return this.daughterdetailForm.get('attendingProgram');
  }
  get giftRecieved(): any {
    return this.daughterdetailForm.get('giftRecieved');
  }
  get alive(): any {
    return this.daughterdetailForm.get('alive');
  }

  get modifiedbyid(): any {
    return sessionStorage.getItem("session-mobile"); // We need to assign login page mobile number here.
  }

  get familymembername(): any {
    return this.daughterdetailForm.get('familymembername');
  }

  get familyMainID(): any {
    return this.daughterdetailForm.get('familyMainID');
  }


  constructor(private formbulider: UntypedFormBuilder, private daughterdetailservice: DaughterDetailService, private sessionstorage: SessionStorageService, private router: Router, private _snackBar: MatSnackBar, public dialog: MatDialog) {

    this.familyID = Number(sessionStorage.getItem("session-familyId"));  //this.loadAllFamily(this.familyid);// We need to set familyid from previous page
    this.sessionmobile = Number(sessionStorage.getItem("session-mobile"));

    this.loadAllDaughterDetails();

  }

  ngOnInit() {
    this.daughterdetailForm = new FormGroup({
      familyid: new FormControl(this.familyID),
      firstname: new FormControl('', [Validators.required]),
      husbandname: new FormControl('', [Validators.required]),
      fatherInLawName: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      relationid: new FormControl('', [Validators.required]),
      village: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.minLength(10), Validators.maxLength(10)]),
      giftRecieved: new FormControl('0'),
      attendingProgram: new FormControl('1'),
      modifiedbyid: new FormControl(this.modifiedbyid),
      familymembername: new FormControl(''),
      familyMainID: new FormControl(''),
      alive: new FormControl('3', [Validators.required])
    });
    this.FillRelationDDL();
    this.loadMainFamilyMemberDetails();

  }

  loadAllDaughterDetails() {
    this.daughterdetailservice.getdaughterdetails(this.familyID).subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  isAllSelected() {
    const numRows = !!this.dataSource && this.dataSource.data.length;
  }

  loadMainFamilyMemberDetails() {
    this.daughterdetailservice.getfamilymemberbyidmobile(this.sessionmobile, this.familyID).subscribe(result => {
      this.daughterdetailForm.controls['familymembername'].setValue(result.firstName);
      this.daughterdetailForm.controls['familyMainID'].setValue(this.familyID);
    });
    this.daughterdetailForm.controls['familymembername'].disable();
    this.daughterdetailForm.controls['familyMainID'].disable();
  }

  deleteDaughter(daughterDetailID: any) {
    if (confirm("Are you sure you want to delete this ?")) {
      this.daughterdetailservice.deletedaughterdetail(daughterDetailID).subscribe(() => {
        this.dataSaved = true;
        this.SavedSuccessful(2);
        this.loadAllDaughterDetails();
        this.daughterDetailIdUpdate = null;
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




  FillRelationDDL() {
    this.allRelations = this.daughterdetailservice.getrelation();
  }


  onSubmitdaughterDetailForm(daughterdetailform: any) {
    this.dataSaved = false;
    console.log(this.daughterdetailForm.status);
    if (this.daughterdetailForm.valid) {
      this.CreateUpdateDaughterDetail(daughterdetailform);
    }
  }

  CreateUpdateDaughterDetail(daughterdetail: DaughterDetail) {
    daughterdetail.attendingProgram = this.daughterdetailForm.controls['attendingProgram'].value == "0" ? false : true;
    daughterdetail.giftRecieved = this.daughterdetailForm.controls['giftRecieved'].value == "0" ? false : true;
    daughterdetail.modifiedbyid = this.modifiedbyid;
    daughterdetail.age = this.daughterdetailForm.controls['age'].value == "" ? null : this.daughterdetailForm.controls['age'].value;
    daughterdetail.mobile = this.daughterdetailForm.controls['mobile'].value == "" ? null : this.daughterdetailForm.controls['mobile'].value;

    if (this.daughterDetailIdUpdate == null) {
      this.daughterdetailservice.createdaughterdetail(daughterdetail)
        .subscribe({
          next: (any) => {
            this.dataSaved = true;
            this.SavedSuccessful(1);
            this.loadAllDaughterDetails();
            this.daughterDetailIdUpdate = null;
            this.resetForm();
          },
          error: (err) => {
            console.log(err);
          }
        }
        );
    }
    else {
      daughterdetail.daughterDetailID = this.daughterDetailIdUpdate;

      this.daughterdetailservice.updatedaughterdetail(daughterdetail)
        .subscribe({
          next: (any) => {
            this.dataSaved = true;
            this.SavedSuccessful(0);
            this.loadAllDaughterDetails();
            this.daughterDetailIdUpdate = null;
            this.resetForm();
          },
          error: (err) => {
            console.log(err);
          }
        }
        );
    }
  }

  loadDaughterDetailToEdit(daughterdetailid: number) {
    this.daughterdetailservice.getdaughterdetailbydaughterid(daughterdetailid).subscribe(result => {
      this.massage = null;
      this.dataSaved = false;
      this.daughterDetailIdUpdate = result.daughterDetailID;
      this.daughterdetailForm.controls['familyid'].setValue(result.familyID);
      this.daughterdetailForm.controls['firstname'].setValue(result.firstName);
      this.daughterdetailForm.controls['husbandname'].setValue(result.husbandName);
      this.daughterdetailForm.controls['fatherInLawName'].setValue(result.fatherInLawName);
      this.daughterdetailForm.controls['age'].setValue(result.age);
      this.daughterdetailForm.controls['relationid'].setValue(result.relationID);
      this.daughterdetailForm.controls['surname'].setValue(result.surname);
      this.daughterdetailForm.controls['attendingProgram'].setValue(result.attendingProgram == true ? "1" : "0");
      this.daughterdetailForm.controls['giftRecieved'].setValue(result.giftRecieved == true ? "1" : "0");
      this.daughterdetailForm.controls['mobile'].setValue(result.mobile);
      this.daughterdetailForm.controls['village'].setValue(result.village);
      this.daughterdetailForm.controls['alive'].setValue(result.alive == 1 ? "1" : (result.alive == 2 ? "2" : "3"));
    });
  }


  resetForm() {
    var vadilname = this.daughterdetailForm.controls['familymembername'].value;
    this.daughterdetailForm.reset();
    this.daughterdetailForm.controls['familymembername'].setValue(vadilname);
    this.daughterdetailForm.controls['familyid'].setValue(this.familyID);
    this.daughterdetailForm.controls['giftRecieved'].setValue('0');
    this.daughterdetailForm.controls['attendingProgram'].setValue('1');
    this.daughterdetailForm.controls['familyMainID'].setValue(this.familyID);
  }

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

  ClearForm() {
    var vadilname = this.daughterdetailForm.controls['familymembername'].value;
    this.daughterdetailForm.reset();
    this.daughterdetailForm.controls['familymembername'].setValue(vadilname);
    this.daughterdetailForm.controls['familyMainID'].setValue(this.familyID);
    this.daughterdetailForm.controls['familyid'].setValue(this.familyID);
    this.daughterdetailForm.controls['giftRecieved'].setValue('0');
    this.daughterdetailForm.controls['attendingProgram'].setValue('1');
  }

  numberOnly(event: { which: any; keyCode: any; }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

}


