import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CareerComponent } from './career/career.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './home/intro/intro.component';
import { ContentComponent } from './home/content/content.component';
import { ProgressBarComponent } from './career/progress-bar/progress-bar.component';
import { ProgressBarDirective } from './career/progress-bar/progress-bar.directive';
import { FieldsComponent } from './career/fields/fields.component';
import { JobsComponent } from './career/jobs/jobs.component';
import { ApplyComponent } from './career/apply/apply.component';
import { FormComponent } from './career/form/form.component';

import { JobService } from './career/jobs/job.service';
import { FieldService } from './career/fields/field.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'careers', component: CareerComponent, children: [
    {path: '', component: FieldsComponent },
    {path: 'jobs', component: JobsComponent },
    {path: 'jobs/:id', component: JobsComponent },
    {path: 'apply/:id', component: ApplyComponent },
    {path: 'form/:id', component: FormComponent }
  ]}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CareerComponent,
    HeaderComponent,
    IntroComponent,
    ContentComponent,
    ProgressBarComponent,
    FieldsComponent,
    JobsComponent,
    ApplyComponent,
    ProgressBarDirective,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    JobService,
    FieldService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
