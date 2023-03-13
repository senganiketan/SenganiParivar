import { Component, OnInit, ViewChild, QueryList } from '@angular/core';
import { AllFamilyDetailsService } from './allfamilydetails.service';
import { MatTableDataSource, } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FamilyMember } from '../model/FamilyMember';
import { DaughterDetail } from '../model/DaughterDetail';
import { FamilyService } from '../family/family.service'
import { OriginalVillage } from '../model/OriginalVillage';
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
  allOriginalVillages!: Observable<OriginalVillage[]>;

  @ViewChild('paginatorFamily', { static: true }) paginatorFamily!: MatPaginator;
  @ViewChild('paginatorDaughters', { static: true }) paginatorDaughters!: MatPaginator;
  @ViewChild(MatSort) sortFamily !: MatSort;
  @ViewChild(MatSort) sortDaughters !: MatSort;

  displayedColumns: string[] = ['familyId', 'firstName', 'fatherHusbandName', 'age', 'relationName', 'gender', 'education','business','maritalStatus', 'mobile', 'attendingProgram', 'currentVillage', 'originalVillage'];
  displayedColumnsdaughter: string[] = ['familyId', 'firstName', 'husbandName', 'surname', 'fatherInLawName', 'relationName', 'age', 'village', 'mobile', 'attendingProgram','alive', 'vadilNuName', 'vadilNuCurrentVillage'];

  constructor(private allfamilyDetailsService: AllFamilyDetailsService, private familyservice: FamilyService) {
    this.loadAllFamily();
    this.loadAllDaughters();
  }
  ngOnInit() {
    this.FillOriginalVillageDDL();
  }

  FillOriginalVillageDDL() {
    this.allOriginalVillages = this.familyservice.getOriginalVillage();
  }

  loadAllFamily() {
    this.allfamilyDetailsService.getAllfamilymembers().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginatorFamily;
      this.dataSource.sort = this.sortFamily;
    });
  }

  loadAllDaughters() {
    this.allfamilyDetailsService.getAllDaughters().subscribe(data1 => {
      this.dataSourcedaughter = new MatTableDataSource(data1);
      this.dataSourcedaughter.paginator = this.paginatorDaughters;
      this.dataSourcedaughter.sort = this.sortDaughters;
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

  applyDaughterFilter(filterValue: string) {
    this.dataSourcedaughter.filter = filterValue.trim().toLowerCase();

    if (this.dataSourcedaughter.paginator) {
      this.dataSourcedaughter.paginator.firstPage();
    }
  }

}


