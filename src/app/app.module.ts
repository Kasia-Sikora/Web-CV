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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FrontendProjectDetailComponent} from "./content/projects/frontendMentorProject/frontendMentorProjectsDetail/frontend-project-detail.component";
import {FrontendProjectComponent} from "./content/projects/frontendMentorProject/frontend-project.component";
import {SocialProofComponent} from "./content/projects/projectModels/socialProof/social-proof.component";
import {TestimonialGridComponent} from "./content/projects/projectModels/testimonialGrid/testimonial-grid.component";
import {RockPaperScissorsComponent} from "./content/projects/projectModels/rockPaperScissors/rock-paper-scissors.component";
import {RoomHomepageComponent} from "./content/projects/projectModels/roomHomepage/room-homepage.component";

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
    FrontendProjectComponent,
    FrontendProjectDetailComponent,
    TestimonialGridComponent,
    SocialProofComponent,
    RoomHomepageComponent,
    RockPaperScissorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    FontAwesomeModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
