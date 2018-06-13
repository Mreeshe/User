import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { SuborgComponent } from './suborg/suborg.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemplatesComponent } from './templates/templates.component';
import { SearchpatientComponent } from './searchpatient/searchpatient.component';
import { UserComponent } from './user/user.component';
import { DiagnosticcentreComponent } from './diagnosticcentre/diagnosticcentre.component';
import { DoctordetailsComponent } from './doctordetails/doctordetails.component';
import { RegisterComponent } from './register/register.component';
import { ArticleComponent } from './article/article.component';
import { LoginComponent } from './login/login.component';
import { ScanComponent } from './scan/scan.component';
import { CliniccenterComponent } from './cliniccenter/cliniccenter.component';
import { TestComponent } from './test/test.component';
import { ItemtypeComponent } from './itemtype/itemtype.component';
import { ItemComponent } from './item/item.component';
import { DatadictionaryComponent } from './datadictionary/datadictionary.component';
export const AppRoutes:Routes = [
    { path: '', component:  RegisterComponent},
  
    { path: 'organisation', component: OrganisationComponent },
    
    { path: 'item', component: ItemComponent },
    { path: 'itemtype', component: ItemtypeComponent },
    { path: 'test', component: TestComponent },
    { path: 'datadictionary', component: DatadictionaryComponent },
    { path: 'suborg', component: SuborgComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'templates', component: TemplatesComponent },
    { path: 'searchpatient', component: SearchpatientComponent },
    { path: 'user', component: UserComponent },
    { path: 'doctordetails', component: DoctordetailsComponent },
    { path: 'article', component: ArticleComponent },
    { path: 'scan', component: ScanComponent },
    
    { path: 'cliniccenter', component: CliniccenterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'diagnosticcentre', component: DiagnosticcentreComponent },
    { path: 'register', component: RegisterComponent },

   ]