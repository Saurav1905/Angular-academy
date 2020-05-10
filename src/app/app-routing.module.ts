import { BackendComponent } from './SubPrograms/backend/backend.component';
import { ProgrampageComponent } from './programpage/programpage.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'program', component: ProgrampageComponent },
  { path: 'SubProgram/Backend', component: BackendComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
