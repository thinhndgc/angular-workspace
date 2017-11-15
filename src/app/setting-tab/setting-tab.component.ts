import { Component, OnInit, AfterViewChecked, AfterViewInit, Input } from '@angular/core';
import { Setting } from './setting-tab.model';
declare var $: any;

@Component({
  selector: 'app-setting-tab',
  templateUrl: './setting-tab.component.html',
  styleUrls: ['./setting-tab.component.css']
})
export class SettingTabComponent implements OnInit {
  @Input() tabData: Setting;
  textBoxList = Array;
  comboBoxList = Array;

  constructor() {

  }

  ngOnInit() {}

  ngAfterViewInit() {
    $('.menu .item').tab();
    $('.dropdown-parent').dropdown();
  };

  openModal(): void{
    $('.ui.modal').modal('show');
  }

}
