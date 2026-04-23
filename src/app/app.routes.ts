import { Routes } from '@angular/router';
import { ParentComponent } from './parent-component/parent-component';
import { ViewChildContentChild } from './view-child-content-child/view-child-content-child';
import { Forms } from './forms/forms';

export const routes: Routes = [
    { path: '', redirectTo: '/parents-component', pathMatch: 'full' } ,
    {path:'parents-component', component:ParentComponent},
    {path:'viewchild', component:ViewChildContentChild},
    {path:'forms', component:Forms}

];
