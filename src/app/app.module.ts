import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TopbarComponent } from './topbar/topbar.component';
import { TopSectionComponent } from './top-section/top-section.component';
import { FirstDropComponent } from './first-drop/first-drop.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MidSectionComponent } from './mid-section/mid-section.component';
import { SecondDropComponent } from './second-drop/second-drop.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [AppComponent, MainPageComponent, TopbarComponent, TopSectionComponent, FirstDropComponent, MidSectionComponent, SecondDropComponent, TaskComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
