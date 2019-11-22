import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { WidgetsComponent } from './component/widgets/widgets.component';
import { ProgressbarComponent } from './component/progressbar/progressbar.component';
import { BadgesComponent } from './component/badges/badges.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WidgetsComponent,
    BadgesComponent,
    ProgressbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
