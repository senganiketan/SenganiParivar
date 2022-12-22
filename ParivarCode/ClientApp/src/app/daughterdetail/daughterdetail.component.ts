import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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
 
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  displayedColumns: string[] = ['select', 'firstName', 'fatherHusbandName', 'relationName',  'age', 'maritalStatus', 'education', 'business', 'mobile', 'attendingProgram',  'Edit', 'Delete'];
  @ViewChild(MatPaginator) paginator !: MatPaginator ;
  @ViewChild(MatSort) sort !: MatSort ;


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
  get business(): any {
    return this.daughterdetailForm.get('business');
  }
  get mobile(): any {
    return this.daughterdetailForm.get('mobile');
  }

  get attendingProgram(): any {
    return this.daughterdetailForm.get('attendingProgram');
  }
  get giftrecieved(): any {
    return this.daughterdetailForm.get('giftrecieved');
  }

  get modifiedbyid(): any {
    return "9876789878"; // We need to assign login page mobile number here.
  }


  constructor(private formbulider: UntypedFormBuilder, private daughterdetailservice: DaughterDetailService, private router: Router, private _snackBar: MatSnackBar, public dialog: MatDialog) {

    this.familyID = 1;  //this.loadAllFamily(this.familyid);// We need to set familyid from previous page 
   
    this.loadAllDaughterDetails();    
  }

  ngOnInit() {
    this.daughterdetailForm = new FormGroup({
      familyid: new FormControl(this.familyID),
      firstname: new FormControl('', [Validators.required]),
      husbandName: new FormControl('', [Validators.required]),
      fatherInLawName: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      relationid: new FormControl('2'),
      village: new FormControl(''),
      age: new FormControl(''),
      mobile: new FormControl('', [Validators.minLength(10), Validators.maxLength(10), Validators.required]),
      giftRecieved: new FormControl(''),
      attendingProgram: new FormControl('1'),    
    });
    this.FillRelationDDL();
  }

  loadAllDaughterDetails() {
    this.daughterdetailservice.getdaughterdetails(this.familyID).subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
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
  checkboxLabel(row: DaughterDetail): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${Number(row.daughterDetailID) + 1}`;
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

  CreateUpdateDaughterDetail(daughterdetail: DaughterDetail){      
    daughterdetail.attendingProgram = this.daughterdetailForm.attendingProgram == "0" ? false : true;  
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
      this.daughterdetailForm.controls['surName'].setValue(result.surname);        
      this.daughterdetailForm.controls['attendingProgram'].setValue(result.attendingProgram == true ? "1" : "0");
      this.daughterdetailForm.controls['giftrecieved'].setValue(result.giftRecieved == true ? "1" : "0");
      this.daughterdetailForm.controls['mobile'].setValue(result.mobile);
      this.daughterdetailForm.controls['village'].setValue(result.village);
    });
  }


  resetForm() {
    this.daughterdetailForm.reset();
    this.daughterdetailForm.controls['familyid'].setValue(this.familyID);
    this.daughterdetailForm.controls['gender'].setValue('male');
    
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

  
}

  
