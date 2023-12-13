import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BlogsComponent } from './blogs/blogs.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { MaindashmanufacturerComponent } from './maindashmanufacturer/maindashmanufacturer.component';
import { MaindashsubscriptionComponent } from './maindashsubscription/maindashsubscription.component';
import { ManindasheventsComponent } from './manindashevents/manindashevents.component';
import { ManindashmessagesComponent } from './manindashmessages/manindashmessages.component';
import { ManindashleadsComponent } from './manindashleads/manindashleads.component';
import { ManindashadvtComponent } from './manindashadvt/manindashadvt.component';
import { CommonModule, DatePipe } from '@angular/common';
import { ManusuccessComponent } from './manusuccess/manusuccess.component';
import { EventsuccessComponent } from './eventsuccess/eventsuccess.component';
import { AdlandingComponent } from './adlanding/adlanding.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrandlandingComponent } from './brandlanding/brandlanding.component';
import { BrandlistingComponent } from './brandlisting/brandlisting.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { JoblistingComponent } from './joblisting/joblisting.component';
import { JobpremiumplanComponent } from './jobpremiumplan/jobpremiumplan.component';
import { ColorcosmeticsComponent } from './colorcosmetics/colorcosmetics.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BlogsComponent,
    MaindashboardComponent,
    SidebarComponent,
    MaindashmanufacturerComponent,
    MaindashsubscriptionComponent,
    ManindasheventsComponent,
    ManindashmessagesComponent,
    ManindashleadsComponent,
    ManindashadvtComponent,
    ManusuccessComponent,
    EventsuccessComponent,
    AdlandingComponent,
    BrandlandingComponent,
    BrandlistingComponent,
    AboutusComponent,
    ContactusComponent,
    JoblistingComponent,
    JobpremiumplanComponent,
    ColorcosmeticsComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxIntlTelInputModule,
    CommonModule
    // CaroyuselModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
