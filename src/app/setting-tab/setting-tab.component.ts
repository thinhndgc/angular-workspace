import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Setting } from './setting-tab.model';
import { log } from 'util';
import { parse } from 'url';
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
  }

  openModal(id: number): void{
    $('.ui.modal.modal-' + id).modal('show');
  }

  changeNumberOfTextBox(tabDataIndex: number): void {
    this.tabData[tabDataIndex].setNumberOfTextBox($('#setting-textbox-' + tabDataIndex).val());
  }

  changeNumberOfComboBox(tabDataIndex: number): void {
    this.tabData[tabDataIndex].setNumberOfComboBox($('#setting-combobox-' + tabDataIndex).val());
  }

  changeNumberOfChildOption(tabDataIndex: number): void {
    this.tabData[tabDataIndex].setNumberOfChildOption($('#setting-child-option-' + tabDataIndex).val());
  }

}
