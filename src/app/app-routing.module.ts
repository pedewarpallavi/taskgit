import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditformComponent } from './editform/editform.component';
import { HomeComponent } from './home/home.component';
import { MoreComponent } from './more/more.component';
import { ProfessionalsComponent } from './professionals/professionals.component';
import { TrusteesComponent } from './trustees/trustees.component';

const routes: Routes = [
  // {path:'' , redirectTo:'Home', pathMatch:'full'},
  {path:'Home', component:HomeComponent},
  {path:'Trust', component:TrusteesComponent},
  {path:'Professional', component:ProfessionalsComponent},
  {path:'More', component:MoreComponent},
  {path:'edit', component:EditformComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
