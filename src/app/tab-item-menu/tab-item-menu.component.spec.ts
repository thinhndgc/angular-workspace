import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabItemMenuComponent } from './tab-item-menu.component';

describe('TabItemMenuComponent', () => {
  let component: TabItemMenuComponent;
  let fixture: ComponentFixture<TabItemMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabItemMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabItemMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
