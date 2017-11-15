import { Component, OnInit, Input } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-setting-modal',
  templateUrl: './setting-modal.component.html',
  styleUrls: ['./setting-modal.component.css']
})
export class SettingModalComponent implements OnInit {
  @Input() numberOfOption: number;
  optionList = Array;

  constructor() {
    
  }

  ngOnInit() {
    $('.dropdown-modal').dropdown({
      showOnFocus: false
    });
  }

}
