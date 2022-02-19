import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavbarComponent} from './components/layout/navbar/navbar.component';
import {LeftColumnComponent} from './components/layout/left-column/left-column.component';
import {MainColumnComponent} from './components/layout/main-column/main-column.component';
import { HomeComponent } from './components/sections/home/home.component';
import { AboutComponent } from './components/sections/about/about.component';
import { SkillsComponent } from './components/sections/skills/skills.component';
import { ProjectsComponent } from './components/sections/projects/projects.component';
import { ResumeComponent } from './components/sections/resume/resume.component';
import { ContactComponent } from './components/sections/contact/contact.component';
import { ProfileAvatarComponent } from './components/layout/left-column/profile-avatar/profile-avatar.component';
import { MenuDesktopComponent } from './components/layout/left-column/menu-desktop/menu-desktop.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftColumnComponent,
    MainColumnComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ResumeComponent,
    ContactComponent,
    ProfileAvatarComponent,
    MenuDesktopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
