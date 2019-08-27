import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChecklistUtilityComponent } from './checklist-utility/checklist-utility.component';
import { UtilityComponent } from './utility/utility.component';
import { ShiftmasterComponent } from './shiftmaster/shiftmaster.component';
import { DetailsComponent } from './details/details.component';


 export const routes: Routes = [{path:'checklist',component:ChecklistUtilityComponent},
                                {path:'utility',component:UtilityComponent},
                                {path:'shiftmaster',component:ShiftmasterComponent},
                                {path:'details',component:DetailsComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
