import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSubmitterComponent } from './content-submitter.component';

describe('ContentSubmitterComponent', () => {
  let component: ContentSubmitterComponent;
  let fixture: ComponentFixture<ContentSubmitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentSubmitterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentSubmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
