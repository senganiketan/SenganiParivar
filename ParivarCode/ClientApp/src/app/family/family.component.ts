import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { UntypedFormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FamilyService } from './family.service';
import { Family } from '../model/Family';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatTableDataSource, } from '@angular/material/table';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';

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
  familyIdUpdate = null;
  massage = null;
  CountryId = null;
  StateId = null;
  CityId = null;
  SelectedDate = null;
  isMale = true;
  isFeMale = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  displayedColumns: string[] = ['select','FamilyID', 'OriginalVillage', 'OriginalDistrict', 'PostalAddressName', 'CurrentAddress', 'CurrentVillage', 'CurrentDistrict', 'CurrentState', 'CurrentPincode',  'Edit', 'Delete'];
  @ViewChild(MatPaginator) paginator !: MatPaginator ;
  @ViewChild(MatSort) sort !: MatSort ;


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






  constructor(private formbulider: UntypedFormBuilder, private familyservice: FamilyService, private router: Router, private _snackBar: MatSnackBar, public dialog: MatDialog) {
   
    this.loadAllFamily();   
  }

  ngOnInit() {
  

    this.familyForm = new FormGroup({
      originalvillage: new FormControl('', [Validators.required]),
      originaldistrict: new FormControl('', [Validators.required]),
      currentaddress: new FormControl('', [Validators.required]),
      currentvillage: new FormControl('', [Validators.required]),
      currentdistrict: new FormControl('', [Validators.required]),
      currentstate: new FormControl('gujarat', [Validators.required]),
      currentpincode: new FormControl('', [Validators.required, Validators.pattern('[0-9]{6}')]),
      postaladdressname: new FormControl('', [Validators.required]),
      residentialfacility: new FormControl(''),
      modifiedbyid: new FormControl('9876789878'), // We need to assign login page mobile number here.      
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
  checkboxLabel(row: Family): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${Number(row.familyID) + 1}`;
  }

  DeleteData() {
    //debugger;
    //const numSelected = this.selection.selected;
    //if (numSelected.length > 0) {
    //  if (confirm("Are you sure to delete items ")) {
    //    this.employeeService.deleteData(numSelected).subscribe(result => {
    //      this.SavedSuccessful(2);
    //      this.loadAllEmployees();
    //    })
    //  }
    //} else {
    //  alert("Select at least one row");
    //}
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  loadAllFamily() {
    this.familyservice.getfamily().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }


  
 

  onSubmitfamilyForm(family: any) {
    this.dataSaved = false;   
    console.log(this.currentpincode.value);
    console.log(this.residentialfacility.value);
    console.log(this.familyForm.status);

    if (this.familyForm.valid) {
      this.CreateFamily(family);
    }   
  }

  CreateFamily(family: Family) {

   
    this.familyservice
      .createfamily(family)
      .subscribe({
        next: (any) => {
          this.dataSaved = true;
          this.SavedSuccessful(1);
          this.loadAllFamily();
          this.familyIdUpdate = null;
          this.familyForm.reset();          
        },
        error: (err) => {
          console.log(err);
        }
      }       
      );
  }



  resetForm() {
    this.familyForm.reset();
    this.massage = null;
    this.dataSaved = false;
    this.isMale = true;
    this.isFeMale = false;
    this.loadAllFamily();
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

  
