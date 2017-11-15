import { Component, OnInit } from '@angular/core';
import { Setting } from '../setting-tab/setting-tab.model'
import { log } from 'util';
// import { setTimeout } from 'timers';
declare var $: any;
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
        const numberOfTextBox = 5;
        const numberOfComboBox = 20;
        const numberOfModalComboBox = 100;
        this.tabData.push(new Setting(tabId, tabName, numberOfTextBox, numberOfComboBox, numberOfModalComboBox));
      }
    }

  ngOnInit() {}

  addTab(): void {
    const tabId = 'Tab ' + (this.tabData.length + 1);
    const tabName = 'This is tab ' + (this.tabData.length + 1);
    const numberOfTextBox = 5;
    const numberOfComboBox = 20;
    const numberOfModalComboBox = 100;
    this.tabData.push(new Setting(tabId, tabName, numberOfTextBox, numberOfComboBox, numberOfModalComboBox));
    setTimeout(() => {
      $('.menu .item').tab();
    }, 500);
  }

  removeTab(): void {
    this.tabData.pop();
  }

}
