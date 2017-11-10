import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Setting } from './setting-tab.model';
declare var $: any;
@Component({
  selector: 'app-setting-tab',
  templateUrl: './setting-tab.component.html',
  styleUrls: ['./setting-tab.component.css']
})
export class SettingTabComponent implements OnInit {
  tabData: Setting[];

  constructor() {
    this.tabData = [];
    for (var index = 0; index < 10; index++) {
      let tabId = 'tab'+index;
      let tabName = 'This is tab ' + index;
      this.tabData.push(new Setting(tabId, tabName));
    }
  }

  ngOnInit() {
    
  }

  ngAfterViewChecked() {
    $('.menu .item').tab();
  }

}
