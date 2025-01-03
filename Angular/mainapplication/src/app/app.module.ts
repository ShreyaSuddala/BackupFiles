import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { PeichartComponent } from './peichart/peichart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ColumnchartComponent } from './columnchart/columnchart.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { TermsconditionsComponent } from './termsconditions/termsconditions.component';
import { FaqComponent } from './faq/faq.component';
import { ReportproblemComponent } from './reportproblem/reportproblem.component';
import { PpolicyComponent } from './ppolicy/ppolicy.component';
import { DetailComponent } from './detail/detail.component';

const approutes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'header', component: HeaderComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent }
    ]
  },
  {
    path:'detail',component:DetailComponent
  },
  {
    path:'terms&conditions',component:TermsconditionsComponent
  },
  {
    path:'faq',component:FaqComponent
  },
  {
    path:'reportproblem',component:ReportproblemComponent
  },
  {
    path:'pploicy',component:PpolicyComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    PeichartComponent,
    ColumnchartComponent,
    SidebarComponent,
    FooterComponent,
    TermsconditionsComponent,
    FaqComponent,
    ReportproblemComponent,
    PpolicyComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    RouterModule.forRoot(approutes),
    NgApexchartsModule,
    MatTreeModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
