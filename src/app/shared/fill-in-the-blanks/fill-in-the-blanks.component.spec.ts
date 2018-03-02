import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillInTheBlanksComponent } from './fill-in-the-blanks.component';

describe('FillInTheBlanksComponent', () => {
  let component: FillInTheBlanksComponent;
  let fixture: ComponentFixture<FillInTheBlanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillInTheBlanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillInTheBlanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
