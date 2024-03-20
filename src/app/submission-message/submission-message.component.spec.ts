import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionMessageComponent } from './submission-message.component';

describe('SubmissionMessageComponent', () => {
  let component: SubmissionMessageComponent;
  let fixture: ComponentFixture<SubmissionMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmissionMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubmissionMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
