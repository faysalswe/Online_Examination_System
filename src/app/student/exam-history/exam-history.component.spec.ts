import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamHistoryComponent } from './exam-history.component';

describe('ExamHistoryComponent', () => {
  let component: ExamHistoryComponent;
  let fixture: ComponentFixture<ExamHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
