import { Component, OnInit } from '@angular/core';
import { Setting } from '../setting-tab/setting-tab.model'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tabData: Setting[];

    constructor() {
      this.tabData = [];
      for (let index = 0; index < 10; index++) {
        const tabId = 'Tab ' + (index + 1);
        const tabName = 'This is tab ' + (index + 1);
        this.tabData.push(new Setting(tabId, tabName));
      }
    }

  ngOnInit() {
  }

}
