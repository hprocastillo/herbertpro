import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeDesktopComponent } from './resume-desktop.component';

describe('ResumeDesktopComponent', () => {
  let component: ResumeDesktopComponent;
  let fixture: ComponentFixture<ResumeDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
