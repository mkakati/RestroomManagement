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
import { DeleteComponent } from './dialogs/delete/delete.component';
import { EditComponent } from './dialogs/edit/edit.component'; 
import {AddDataService} from './shared/add-data.service';
import { ShifteditComponent } from './shiftedit/shiftedit.component';
import { ShiftdeleteComponent } from './shiftdelete/shiftdelete.component';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { IgxTimePickerModule, IgxTimePickerComponent } from "igniteui-angular";

@NgModule({
  declarations: [
    AppComponent,
    UtilityComponent,
    ChecklistUtilityComponent,
    ShiftmasterComponent,
    DetailsComponent,
   DeleteComponent,
    EditComponent,
    ShifteditComponent,
    ShiftdeleteComponent,
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
    NgxPaginationModule,
    AmazingTimePickerModule,
    IgxTimePickerModule
  ],
  entryComponents: [
    EditComponent,
    DeleteComponent,
    ShifteditComponent,
    ShiftdeleteComponent
  ],
  providers: [AddDataService,IgxTimePickerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
