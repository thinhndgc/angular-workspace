import { Component, OnInit, Input } from '@angular/core';
import { Setting } from '../setting-tab/setting-tab.model'
@Component({
  selector: 'app-tab-item-data',
  templateUrl: './tab-item-data.component.html',
  styleUrls: ['./tab-item-data.component.css']
})
export class TabItemDataComponent implements OnInit {
  @Input() tabInputData2: Setting;

  constructor() { }

  ngOnInit() {
  }

}
