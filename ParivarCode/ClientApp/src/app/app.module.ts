import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
//import { AppRoutingModule } from './app-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatPaginatorModule } from '@angular/material/paginator';
//import { NgMarqueeModule } from 'ng-marquee';
import { MatDialogModule } from '@angular/material/dialog';



import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateFamilyMemberComponent } from './createfamilymember/createfamilymember.component';
import { ListFamilyMemberComponent } from './listfamilymember/listfamilymember.component';
import { FamilyComponent } from './family/family.component';
import { FamilyMemberComponent } from './familymember/familymember.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
    CreateFamilyMemberComponent,
    ListFamilyMemberComponent,
    FamilyComponent,
    FamilyMemberComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    CdkTableModule,
    MatPaginatorModule,
    MatDialogModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },    
      { path: 'login-data', component: LoginComponent },    
      { path: 'family-create-member', component: CreateFamilyMemberComponent },
      { path: 'familymember-list', component: ListFamilyMemberComponent },
      { path: 'family', component: FamilyComponent },
      { path: 'familymember', component: FamilyMemberComponent },
    ]),   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
