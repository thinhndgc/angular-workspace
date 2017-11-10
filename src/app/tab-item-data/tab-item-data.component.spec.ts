import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabItemDataComponent } from './tab-item-data.component';

describe('TabItemDataComponent', () => {
  let component: TabItemDataComponent;
  let fixture: ComponentFixture<TabItemDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabItemDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabItemDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
