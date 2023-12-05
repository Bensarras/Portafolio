import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { ProjectComponent } from './component/project/project.component';
import { WorkComponent } from './component/work/work.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'project', component: ProjectComponent},
    { path: 'work', component: WorkComponent},
    { path: '**', component: HomeComponent},
];
