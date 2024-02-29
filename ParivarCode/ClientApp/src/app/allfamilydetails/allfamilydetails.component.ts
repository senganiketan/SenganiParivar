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
import { TableUtil } from "./tableUtil";
import { SessionStorageService } from '../service/sessionstorage.service';

@Component({
  selector: 'app-allfamilydetails',
  templateUrl: './allfamilydetails.component.html'
  , styleUrls: ['allfamilydetails.component.css'],

})
export class AllFamilyDetailsComponent implements OnInit {

  familymember: FamilyMember[] = [];
  dataSourceFamily !: MatTableDataSource<Family>;
  dataSourceMember !: MatTableDataSource<FamilyMember>;
  dataSourcedaughter !: MatTableDataSource<DaughterDetail>;
  allOriginalVillages!: Observable<OriginalVillage[]>;
  familydatasourceArray: Family[] = [];
  familymemberdatasourceArray: FamilyMember[] = [];
  daughterdatasourceArray: DaughterDetail[] = [];
  isAdminLoggedIn = false;

  @ViewChild('paginatorFamilyMembers', { static: true }) paginatorFamilyMembers!: MatPaginator;
  @ViewChild('paginatorDaughters', { static: true }) paginatorDaughters!: MatPaginator;
  @ViewChild('paginatorFamily', { static: true }) paginatorFamily!: MatPaginator;
  @ViewChild(MatSort) sortFamilyMember !: MatSort;
  @ViewChild(MatSort) sortDaughters !: MatSort;
  @ViewChild(MatSort) sortFamily !: MatSort;

  displayedColumns: string[] = ['familyId', 'firstName', 'fatherHusbandName', 'age', 'relationName', 'gender', 'education', 'business', 'maritalStatus', 'mobile', 'currentVillage', 'originalVillage'];
  displayedColumnsdaughter: string[] = ['familyId', 'firstName', 'husbandName', 'surname', 'fatherInLawName', 'relationName', 'age', 'village', 'vadilNuName', 'vadilNuOrginalVillage', 'mobile', 'attendingProgram', 'alive'];
  displayedColumnsFamily: string[] = ['familyId', 'postalAddressName', 'currentAddress', 'currentVillage', 'currentDistrict', 'currentState', 'currentPincode', 'originalVillage'];

  constructor(private allfamilyDetailsService: AllFamilyDetailsService, private familyservice: FamilyService, private sessionstorage: SessionStorageService,) {
    this.loadAllFamily();
    this.loadAllFamilyMembers();
    this.loadAllDaughters();
  }
  ngOnInit() {
    if (Number(this.sessionstorage.getData("session-mobile")) == 9979253044) {
      this.isAdminLoggedIn = true;
    }

    this.FillOriginalVillageDDL();
  }

  FillOriginalVillageDDL() {
    this.allOriginalVillages = this.familyservice.getOriginalVillage();
  }
  loadAllFamily() {
    this.allfamilyDetailsService.getAllfamily().subscribe(data => {
      this.dataSourceFamily = new MatTableDataSource(data);
      this.dataSourceFamily.paginator = this.paginatorFamily;
      this.dataSourceFamily.sort = this.sortFamily;
      this.familydatasourceArray = data;
    });
  }

  loadAllFamilyMembers() {
    this.allfamilyDetailsService.getAllfamilymembers().subscribe(data => {
      this.dataSourceMember = new MatTableDataSource(data);
      this.dataSourceMember.paginator = this.paginatorFamilyMembers;
      this.dataSourceMember.sort = this.sortFamilyMember;
      this.familymemberdatasourceArray = data;
    });
  }

  loadAllDaughters() {
    this.allfamilyDetailsService.getAllDaughters().subscribe(data1 => {
      this.dataSourcedaughter = new MatTableDataSource(data1);
      this.dataSourcedaughter.paginator = this.paginatorDaughters;
      this.dataSourcedaughter.sort = this.sortDaughters;
      this.daughterdatasourceArray = data1;
    });
  }

  applyFamilyFilter(filterValue: string) {
    this.dataSourceFamily.filter = filterValue.trim().toLowerCase();
    if (this.dataSourceFamily.paginator) {
      this.dataSourceFamily.paginator.firstPage();
    }
    this.familydatasourceArray = this.dataSourceFamily.filteredData;
  }

  applyFilter(filterValue: string) {
    this.dataSourceMember.filter = filterValue.trim().toLowerCase();
    if (this.dataSourceMember.paginator) {
      this.dataSourceMember.paginator.firstPage();
    }
    this.familymemberdatasourceArray = this.dataSourceMember.filteredData;
  }


  applyDaughterFilter(filterValue: string) {
    this.dataSourcedaughter.filter = filterValue.trim().toLowerCase();
    if (this.dataSourcedaughter.paginator) {
      this.dataSourcedaughter.paginator.firstPage();
    }
    this.daughterdatasourceArray = this.dataSourcedaughter.filteredData;
  }


  exportArray() {
    const FamilyConstant: Partial<FamilyElement>[] = this.familydatasourceArray.map(x => ({
      familyID: x.familyID,
      postalAddressName: x.postalAddressName,
      currentAddress: x.currentAddress,
      currentVillage: x.currentVillage,
      currentState: x.currentVillage,
      currentDistrict: x.currentDistrict,
      currentPincode: x.currentPincode,
      originalVillage: x.originalVillage,
    }));


    const FamilyMembersConstant: Partial<FamilyMemberElement>[] = this.familymemberdatasourceArray.map(x => ({
      familyID: x.familyID,
      firstName: x.firstName,
      fatherHusbandName: x.fatherHusbandName,
      gender: x.gender,
      age: x.age,
      maritalStatus: x.maritalStatus,
      education: x.education,
      business: x.business,
      mobile: x.mobile,
      relationName: x.relationName,
      attendingProgramValue: x.attendingProgramValue,
      //currentVillage: x.currentVillage,
      // originalVillage : 
    }));


    const DaughterConstant: Partial<DaughterElement>[] = this.daughterdatasourceArray.map(x => ({
      familyID: x.familyID,
      firstName: x.firstName,
      husbandName: x.husbandName,
      surname: x.surname,
      fatherInLawName: x.fatherInLawName,
      RelationName: x.relationName,
      age: x.age,
      village: x.village,
      vadilNuName: x.vadilNuName,
      vadilNuOrginalVillage: x.vadilNuOrginalVillage,
      mobile: x.mobile,
      attendingProgramValue: x.attendingProgramValue,
      aliveName: x.aliveName
    }));

    TableUtil.exportArrayToExcel(FamilyConstant, FamilyMembersConstant, DaughterConstant);
  }
}

export interface FamilyElement {
  familyID: number;
  postalAddressName: string;
  originalVillage: string;
  originalDistrict: string;
  currentAddress: string;
  currentVillage: string;
  currentDistrict: string;
  currentState: string;
  currentPincode: number;
}

export interface FamilyMemberElement {
  familyID: number;
  firstName: string;
  fatherHusbandName: string;
  gender: string;
  age: number;
  maritalStatus: string;
  education: string;
  business: string;
  mobile: bigint;
  relationName: string;
  currentVillage: string;
  originalVillage: string;
}

export interface DaughterElement {
  daughterDetailID?: number;
  familyID?: number;
  firstName: string,
  husbandName: string,
  fatherInLawName: string,
  surname: string,
  relationID?: number;
  village: string,
  age?: number;
  mobile?: bigint;
  active?: boolean;
  attendingProgram?: boolean;
  alive?: number;
  giftRecieved?: boolean;
  modifiedbyid?: bigint;
  modifiedDate?: Date;
  RelationName: string,
  aliveName: string,
  vadilNuName: string,
  vadilNuOrginalVillage: string,
  attendingProgramValue?: string;
}
