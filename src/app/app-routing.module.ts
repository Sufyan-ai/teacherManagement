import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminCstomerComponent } from './admin/admin-cstomer/admin-cstomer.component';

const routes: Routes = [
  { 
  path:'' ,
  component:LoginComponent
  },
  { 
    path:'teacher-data',
    component:AdminCstomerComponent
    },
    { 
      path:'teacher-panel',
      component:AdminCstomerComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
