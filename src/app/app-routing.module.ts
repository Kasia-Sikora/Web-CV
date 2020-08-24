import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from './content/contact/contact.component';
import {ProjectsComponent} from './content/projects/projects.component';
import {AboutComponent} from './content/about/about.component';
import {ResumeComponent} from './content/resume/resume.component';
import {ProjectDetailComponent} from './content/projects/projectDetail/project-detail.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: AboutComponent, data: {animation: 'About'}},
  {path: 'resume', component: ResumeComponent, data: {animation: 'Resume'}},
  {path: 'projects', component: ProjectsComponent, data: {animation: 'Project'}},
  {path: 'projects/:name', component: ProjectDetailComponent},
  {path: 'contact', component: ContactComponent, data: {animation: 'Contact'}},
  {path: '**', component: AboutComponent, data: {animation: 'About'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
