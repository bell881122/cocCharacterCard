import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// Costum component & service
import { CharacterComponent } from './character/character.component';
import { ProfileComponent } from './character/profile/profile.component';
import { CharacteristicsComponent } from './character/characteristics/characteristics.component';
import { StatusItemComponent } from './character/characteristics/statusItem.component';
import { StatusItemService } from './character/characteristics/statusItem.service';
import { HeadshotComponent } from './character/profile/headshot.component';
import { SkillListComponent } from './character/skill-list/skill-list.component';



@NgModule({
  declarations: [
    AppComponent,
// Costum Component
    CharacterComponent,
    ProfileComponent,
    CharacteristicsComponent,
    StatusItemComponent,
    HeadshotComponent,
    SkillListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule
  ],
  providers: [
    // Costum Service
    StatusItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
