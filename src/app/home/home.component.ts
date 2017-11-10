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
      for (var index = 0; index < 10; index++) {
        let tabId = 'Tab '+index;
        let tabName = 'This is tab ' + index;
        this.tabData.push(new Setting(tabId, tabName));
      }
    }

  ngOnInit() {
  }

}
