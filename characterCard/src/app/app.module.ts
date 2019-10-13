import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// Costum component & service
import { CharacterComponent } from './character/character.component';
import { ProfileComponent } from './character/profile/profile.component';
import { CharacteristicsComponent } from './character/characteristics/characteristics.component';
// import { StatusItemComponent } from './character/characteristics/statusItem.component';
import { StatusItemService } from './character/characteristics/statusItem.service';
import { HeadshotComponent } from './character/profile/headshot.component';
import { SkillListComponent } from './character/skill-list/skill-list.component';
import { SkillsComponent } from './character/skill-list/skills.component';
import { SkillsService } from './character/skill-list/skills.service';
import { DicehundredComponent } from './character/dice/dicehundred/dicehundred.component';
import { MutildiceComponent } from './character/dice/mutildice/mutildice.component';
import { SearchFilterPipe } from './searchfilter.pipe';
import { BackstoryComponent } from './character/otherdata/backstory.component';
// import { DiceComponent } from './character/dice/dice.component';



@NgModule({
  declarations: [
    AppComponent,
// Costum Component
    CharacterComponent,
    ProfileComponent,
    CharacteristicsComponent,
    // StatusItemComponent,
    HeadshotComponent,
    SkillListComponent,
    SkillsComponent,
    DicehundredComponent,
    MutildiceComponent,
    SearchFilterPipe,
    BackstoryComponent,
    // DiceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    // Costum Service
    StatusItemService,
    SkillsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
