import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from '../environments/environment';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {ReactiveFormsModule} from "@angular/forms";


import {DesktopComponent} from './components/desktop/desktop.component';
import {MobileComponent} from './components/mobile/mobile.component';
import {AboutMobileComponent} from './components/mobile/sections/about-mobile/about-mobile.component';
import {SkillsMobileComponent} from './components/mobile/sections/skills-mobile/skills-mobile.component';
import {ProjectsMobileComponent} from './components/mobile/sections/projects-mobile/projects-mobile.component';
import {ResumeMobileComponent} from './components/mobile/sections/resume-mobile/resume-mobile.component';
import {ContactMobileComponent} from './components/mobile/sections/contact-mobile/contact-mobile.component';
import {NavbarMobileComponent} from './components/mobile/layout/navbar-mobile/navbar-mobile.component';
import {ContentMobileComponent} from './components/mobile/layout/content-mobile/content-mobile.component';
import {AboutDesktopComponent} from './components/desktop/sections/about-desktop/about-desktop.component';
import {SkillsDesktopComponent} from './components/desktop/sections/skills-desktop/skills-desktop.component';
import {ResumeDesktopComponent} from './components/desktop/sections/resume-desktop/resume-desktop.component';
import {ProjectsDesktopComponent} from './components/desktop/sections/projects-desktop/projects-desktop.component';
import {ContactDesktopComponent} from './components/desktop/sections/contact-desktop/contact-desktop.component';
import {SidebarDesktopComponent} from './components/desktop/layout/sidebar-desktop/sidebar-desktop.component';
import {ContentDesktopComponent} from './components/desktop/layout/content-desktop/content-desktop.component';
import {NavbarDesktopComponent} from './components/desktop/layout/navbar-desktop/navbar-desktop.component';
import {ProfileDesktopComponent} from './components/desktop/layout/profile-desktop/profile-desktop.component';
import {
  LeftColumnDesktopComponent
} from './components/desktop/layout/left-column-desktop/left-column-desktop.component';

@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    MobileComponent,
    AboutMobileComponent,
    SkillsMobileComponent,
    ProjectsMobileComponent,
    ResumeMobileComponent,
    ContactMobileComponent,
    NavbarMobileComponent,
    ContentMobileComponent,
    AboutDesktopComponent,
    SkillsDesktopComponent,
    ResumeDesktopComponent,
    ProjectsDesktopComponent,
    ContactDesktopComponent,
    SidebarDesktopComponent,
    ContentDesktopComponent,
    NavbarDesktopComponent,
    ProfileDesktopComponent,
    LeftColumnDesktopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
