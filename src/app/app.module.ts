import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component'; // Import LoginComponent
import { SignupComponent } from './components/signup/signup.component'; // Import SignupComponent
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot(),
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent, // Add LoginComponent to the declarations array
    SignupComponent, // Add SignupComponent to the declarations array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
