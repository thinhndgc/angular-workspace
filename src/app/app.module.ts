import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SettingTabComponent } from './setting-tab/setting-tab.component';
import { SettingModalComponent } from './setting-modal/setting-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingTabComponent,
    SettingModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
