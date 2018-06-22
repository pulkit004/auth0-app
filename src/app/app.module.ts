import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './modules/header/header.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AppRouting } from './app.routing';
import { AuthenticationService } from './shared/services/authentication.service';
import { AuthGaurd } from './shared/services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [AuthenticationService, AuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
