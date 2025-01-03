import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HelloComponent } from './hello/hello.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { ServiceService } from './service.service';
import { ErrorsolveComponent } from './errorsolve/errorsolve.component';




const rout:Routes =[
  {
    path:"home",component:HomeComponent
  },
  {
    path:"about",component:AboutComponent
  },
  {
    path:"contact",component:ContactComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HelloComponent,
    ChildComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    ErrorsolveComponent,
    
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rout),
    HttpClientModule
    

  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
