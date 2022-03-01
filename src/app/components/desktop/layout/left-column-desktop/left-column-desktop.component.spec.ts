import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftColumnDesktopComponent } from './left-column-desktop.component';

describe('LeftColumnDesktopComponent', () => {
  let component: LeftColumnDesktopComponent;
  let fixture: ComponentFixture<LeftColumnDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftColumnDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftColumnDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
