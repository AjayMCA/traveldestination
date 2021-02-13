import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home-component/home-component.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { errorComponent } from './Error/error.component';
import { AdventureJourneyComponent } from './adventure-journey/adventure-journey.component';
import { NatureJourneyComponent } from './nature-journey/nature-journey.component';
import { DevotionalJourneyComponent } from './devotional-journey/devotional-journey.component';
import { HauntedJourneyComponent } from './haunted-journey/haunted-journey.component';
import { monumentComponent } from './monument/monument.component';
import { TourActivityComponent } from './tour-activity/tour-activity.component';
import { TransportFacilityComponent } from './transport-facility/transport-facility.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { adminHomeComponent } from './admin-home/admin-home.component';
import { displayDetails } from './adventure-journey/displayDetail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'adventure-Journey', component: AdventureJourneyComponent },
  { path: 'nature-Journey', component: NatureJourneyComponent },
  { path: 'devotional-Journey', component: DevotionalJourneyComponent },
  { path: 'haunted-Journey', component: HauntedJourneyComponent },
  { path: 'monument', component: monumentComponent },
  { path: 'tour-activity', component: TourActivityComponent },
  { path: 'transport-facility', component: TransportFacilityComponent },
  { path: 'displayDetails', component: displayDetails },
  { path: 'admin', component: AdminLoginComponent },
  { path: 'admin-home', component: adminHomeComponent },
  { path: '**', component: errorComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }