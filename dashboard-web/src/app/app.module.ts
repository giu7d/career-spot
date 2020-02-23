import { HttpModule } from '@angular/http';
import { CandidateService } from './dash/candidate/candidare.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DashComponent } from './dash/dash.component';
import { CandidateComponent } from './dash/candidate/candidate.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    DashComponent,
    CandidateComponent
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  providers: [
    CandidateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
