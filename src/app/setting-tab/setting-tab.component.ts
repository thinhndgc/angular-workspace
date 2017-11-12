import { Component, OnInit, AfterViewChecked, Input } from '@angular/core';
import { Setting } from './setting-tab.model';
declare var $: any;

@Component({
  selector: 'app-setting-tab',
  templateUrl: './setting-tab.component.html',
  styleUrls: ['./setting-tab.component.css']
})
export class SettingTabComponent implements OnInit {
  @Input() tabData: Setting;
  textBoxList: number[];
  comboBoxList: number[];
  comboBoxOptionList: number[];
  constructor() {
    this.textBoxList = Array(5).fill(1);
    this.comboBoxList = Array(20).fill(1);
    this.comboBoxOptionList = Array(100).fill(1);
  }

  ngOnInit() {}

  ngAfterViewChecked() {
    $('.menu .item').tab();
    // $('.ui.dropdown').dropdown();
  };

}
