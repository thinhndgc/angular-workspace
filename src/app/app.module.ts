import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SettingTabComponent } from './setting-tab/setting-tab.component';
import { TabItemMenuComponent } from './tab-item-menu/tab-item-menu.component';
import { TabItemDataComponent } from './tab-item-data/tab-item-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingTabComponent,
    TabItemMenuComponent,
    TabItemDataComponent
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
