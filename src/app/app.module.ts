import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {PersonalComponent} from './personal/personal.component';
import {AppRoutingModule} from './app-routing.module';
import {AboutComponent} from './content/about/about.component';
import {ContactComponent} from './content/contact/contact.component';
import {ProjectsComponent} from './content/projects/projects.component';
import {ResumeComponent} from './content/resume/resume.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {ProjectDetailComponent} from './content/projects/projectDetail/project-detail.component';
import {FoodstuffComponent} from './content/projects/projectModels/foodstuff/foodstuff.component';
import {CvComponent} from './content/projects/projectModels/CV/cv.component';
import {LifeOfAntsComponent} from './content/projects/projectModels/lifeOfAnts/life-of-ants.component';
import {MemoryGameComponent} from './content/projects/projectModels/memoryGame/memory-game.component';
import {ApiWarsComponent} from './content/projects/projectModels/apiWars/api-wars.component';
import {ArkanoidComponent} from './content/projects/projectModels/arkanoid/arkanoid.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PersonalComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    ResumeComponent,
    ProjectDetailComponent,
    FoodstuffComponent,
    CvComponent,
    LifeOfAntsComponent,
    MemoryGameComponent,
    ApiWarsComponent,
    ArkanoidComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    FontAwesomeModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
