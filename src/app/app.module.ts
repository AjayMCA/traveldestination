import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home-component/home-component.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { errorComponent } from './Error/error.component';
import { navRoute } from './nav-bar/rout.component';
import { footerComponent } from './footer/footer.component';
import { AdventureJourneyComponent } from './adventure-journey/adventure-journey.component';
import { NatureJourneyComponent } from './nature-journey/nature-journey.component';
import { DevotionalJourneyComponent } from './devotional-journey/devotional-journey.component';
import { HauntedJourneyComponent } from './haunted-journey/haunted-journey.component';
import { monumentComponent } from './monument/monument.component';
import { TourActivityComponent } from './tour-activity/tour-activity.component';
import { TransportFacilityComponent } from './transport-facility/transport-facility.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { searchComponent } from './search/search.component';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminModule } from './admin-module';
import {displayDetails } from './adventure-journey/displayDetail.component';

@NgModule({
  declarations: [
    AppComponent,HomeComponent,AboutUsComponent,errorComponent,navRoute,footerComponent,
    AdventureJourneyComponent, NatureJourneyComponent, DevotionalJourneyComponent,
    HauntedJourneyComponent, monumentComponent, TourActivityComponent, TransportFacilityComponent,
    searchComponent, AdminLoginComponent, displayDetails
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule, ReactiveFormsModule, AngularFontAwesomeModule, BrowserAnimationsModule, AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
