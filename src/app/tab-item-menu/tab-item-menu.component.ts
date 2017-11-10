import { Component, OnInit, Input } from '@angular/core';
import { Setting } from '../setting-tab/setting-tab.model'
@Component({
  selector: 'app-tab-item-menu',
  templateUrl: './tab-item-menu.component.html',
  styleUrls: ['./tab-item-menu.component.css']
})
export class TabItemMenuComponent implements OnInit {
  @Input() tabInputData: Setting;
  
  constructor() { }

  ngOnInit() {
  }

}
