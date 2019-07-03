import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GstAddComponent } from './gst-add.component';

describe('GstAddComponent', () => {
  let component: GstAddComponent;
  let fixture: ComponentFixture<GstAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GstAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GstAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
