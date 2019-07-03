import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GstEditComponent } from './gst-edit.component';

describe('GstEditComponent', () => {
  let component: GstEditComponent;
  let fixture: ComponentFixture<GstEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GstEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GstEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
