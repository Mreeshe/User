import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { OrganisationService } from './organisation/organisation.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.route';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { OrganisationComponent } from './organisation/organisation.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SuborgComponent } from './suborg/suborg.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiagnosticcentreComponent } from './diagnosticcentre/diagnosticcentre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplatesComponent } from './templates/templates.component';
import { SearchpatientComponent } from './searchpatient/searchpatient.component';
import { UserComponent } from './user/user.component';
import { FooterComponent } from './footer/footer.component';
import { DoctordetailsComponent } from './doctordetails/doctordetails.component';
import { CliniccenterComponent } from './cliniccenter/cliniccenter.component';
import { TestComponent } from './test/test.component';
import { ScanComponent } from './scan/scan.component';
import { DatadictionaryComponent } from './datadictionary/datadictionary.component';
import { ArticleComponent } from './article/article.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { ItemtypeComponent } from './itemtype/itemtype.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    OrganisationComponent,
    SuborgComponent,
    DashboardComponent,
    DiagnosticcentreComponent,
    TemplatesComponent,
    SearchpatientComponent,
    UserComponent,
    FooterComponent,
    DoctordetailsComponent,
    CliniccenterComponent,
    TestComponent,
    ScanComponent,
    DatadictionaryComponent,
    ArticleComponent,
    RegisterComponent,
    LoginComponent,
    ItemtypeComponent,
    ItemComponent
    
  ],
  imports: [
    BrowserModule,
    ToastModule.forRoot(),
    NgbModule.forRoot(),
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,      
    RouterModule.forRoot(AppRoutes),
   
  ],
  providers: [
    OrganisationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }