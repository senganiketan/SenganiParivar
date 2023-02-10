import { Component, OnInit, ViewChild } from '@angular/core';
import { AllFamilyDetailsService } from './allfamilydetails.service';
import { MatTableDataSource, } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FamilyMember } from '../model/FamilyMember';
import { DaughterDetail } from '../model/DaughterDetail';

@Component({
  selector: 'app-allfamilydetails',
  templateUrl: './allfamilydetails.component.html'
  , styleUrls: ['allfamilydetails.component.css'],

})
export class AllFamilyDetailsComponent implements OnInit {

  familymember: FamilyMember[] = [];
  dataSource !: MatTableDataSource<FamilyMember>;
  dataSourcedaughter !: MatTableDataSource<DaughterDetail>;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  displayedColumns: string[] = ['firstName', 'fatherHusbandName', 'relationName', 'maritalStatus', 'mobile', 'attendingProgram', 'currentVillage', 'originalVillage'];
  displayedColumnsdaughter: string[] = ['firstName', 'husbandName', 'surname', 'fatherInLawName', 'relationName', 'age', 'village', 'mobile', 'attendingProgram', 'vadilNuName', 'vadilNuCurrentVillage'];

  constructor(private allfamilyDetailsService: AllFamilyDetailsService) {
    this.loadAllFamily();
    this.loadAllDaughters();
  }
  ngOnInit() {
  }

  loadAllFamily() {
    this.allfamilyDetailsService.getAllfamilymembers().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  loadAllDaughters() {
    this.allfamilyDetailsService.getAllDaughters().subscribe(data => {
      this.dataSourcedaughter = new MatTableDataSource(data);
      this.dataSourcedaughter.paginator = this.paginator;
      this.dataSourcedaughter.sort = this.sort;
    });
  }
}


