import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterclickclassComponent } from './afterclickclass.component';

describe('AfterclickclassComponent', () => {
  let component: AfterclickclassComponent;
  let fixture: ComponentFixture<AfterclickclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterclickclassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterclickclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
