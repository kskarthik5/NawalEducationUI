import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftScrollComponent } from './left-scroll.component';

describe('LeftScrollComponent', () => {
  let component: LeftScrollComponent;
  let fixture: ComponentFixture<LeftScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftScrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
