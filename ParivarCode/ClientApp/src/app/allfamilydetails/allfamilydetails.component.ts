import { Component, OnInit, ViewChild, QueryList } from '@angular/core';
import { AllFamilyDetailsService } from './allfamilydetails.service';
import { MatTableDataSource, } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FamilyMember } from '../model/FamilyMember';
import { DaughterDetail } from '../model/DaughterDetail';
import { FamilyService } from '../family/family.service'
import { OriginalVillage } from '../model/OriginalVillage';
import { Family } from '../model/Family';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-allfamilydetails',
  templateUrl: './allfamilydetails.component.html'
  , styleUrls: ['allfamilydetails.component.css'],

})
export class AllFamilyDetailsComponent implements OnInit {

  familymember: FamilyMember[] = [];
  dataSource !: MatTableDataSource<FamilyMember>;
  dataSourcedaughter !: MatTableDataSource<DaughterDetail>;
  dataSourceFamily !: MatTableDataSource<Family>;
  allOriginalVillages!: Observable<OriginalVillage[]>;

  @ViewChild('paginatorFamilyMembers', { static: true }) paginatorFamilyMembers!: MatPaginator;
  @ViewChild('paginatorDaughters', { static: true }) paginatorDaughters!: MatPaginator;
  @ViewChild('paginatorFamily', { static: true }) paginatorFamily!: MatPaginator;
  @ViewChild(MatSort) sortFamilyMember !: MatSort;
  @ViewChild(MatSort) sortDaughters !: MatSort;
  @ViewChild(MatSort) sortFamily !: MatSort;

  displayedColumns: string[] = ['familyId', 'firstName', 'fatherHusbandName', 'age', 'relationName', 'gender', 'education','business','maritalStatus', 'mobile',  'currentVillage', 'originalVillage'];
  displayedColumnsdaughter: string[] = ['familyId', 'firstName', 'husbandName', 'surname', 'fatherInLawName', 'relationName', 'age', 'village', 'vadilNuName', 'vadilNuOrginalVillage', 'mobile', 'attendingProgram', 'alive'];
  displayedColumnsFamily: string[] = ['familyId', 'postalAddressName', 'currentAddress', 'currentVillage', 'currentDistrict', 'currentState', 'currentPincode', 'originalVillage'];

  constructor(private allfamilyDetailsService: AllFamilyDetailsService, private familyservice: FamilyService) {
    this.loadAllFamily();
    this.loadAllFamilyMembers();
    this.loadAllDaughters();    
  }
  ngOnInit() {
    this.FillOriginalVillageDDL();
  }

  FillOriginalVillageDDL() {
    this.allOriginalVillages = this.familyservice.getOriginalVillage();
  }

  loadAllFamilyMembers() {
    this.allfamilyDetailsService.getAllfamilymembers().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginatorFamilyMembers;
      this.dataSource.sort = this.sortFamilyMember;
    });
  }

  loadAllDaughters() {
    this.allfamilyDetailsService.getAllDaughters().subscribe(data1 => {
      this.dataSourcedaughter = new MatTableDataSource(data1);
      this.dataSourcedaughter.paginator = this.paginatorDaughters;
      this.dataSourcedaughter.sort = this.sortDaughters;
    });
  }

  loadAllFamily() {
    this.allfamilyDetailsService.getAllfamily().subscribe(data => {
      this.dataSourceFamily = new MatTableDataSource(data);
      this.dataSourceFamily.paginator = this.paginatorFamily;
      this.dataSourceFamily.sort = this.sortFamily;
    });
  }


  onOriginalVillage() {
  }

  onDaughterOriginalVillage() {
  }

  applyFilter(filterValue: string) {    
    this.dataSource.filter = filterValue.trim().toLowerCase();   

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyFamilyFilter(filterValue: string) {
    this.dataSourceFamily.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceFamily.paginator) {
      this.dataSourceFamily.paginator.firstPage();
    }
  }

  applyDaughterFilter(filterValue: string) {
    this.dataSourcedaughter.filter = filterValue.trim().toLowerCase();

    if (this.dataSourcedaughter.paginator) {
      this.dataSourcedaughter.paginator.firstPage();
    }
  }

}


