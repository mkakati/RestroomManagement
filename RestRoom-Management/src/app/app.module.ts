import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilityComponent } from './utility/utility.component';
import { MatButtonModule, MatMenuModule, MatDatepickerModule,MatNativeDateModule,MatIconModule,MatCardModule,
MatSidenavModule,MatFormFieldModule,MatInputModule,MatTooltipModule,MatToolbarModule,MatTableModule,
MatDialogModule,} from '@angular/material';  
//import { MatRadioModule } from '@angular/material/radio';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import {BsDatepickerModule,DatepickerModule} from 'ngx-bootstrap/datepicker';
import { ChecklistUtilityComponent } from './checklist-utility/checklist-utility.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import{  routes } from './app-routing.module';
import { ShiftmasterComponent } from './shiftmaster/shiftmaster.component';
import { DetailsComponent } from './details/details.component';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { TimepickerModule } from 'ngx-bootstrap';
import { NgAlertModule } from '@theo4u/ng-alert';
import {NgxPaginationModule} from 'ngx-pagination'; 

@NgModule({
  declarations: [
    AppComponent,
    UtilityComponent,
    ChecklistUtilityComponent,
    ShiftmasterComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule, MatMenuModule, MatDatepickerModule,MatNativeDateModule , MatIconModule, MatCardModule,
    MatSidenavModule,MatFormFieldModule,MatInputModule, MatTooltipModule, MatToolbarModule , MatTableModule,
    MatDialogModule,
    BrowserAnimationsModule,
    DatepickerModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgAlertModule ,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
