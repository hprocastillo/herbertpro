import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDesktopComponent } from './content-desktop.component';

describe('ContentDesktopComponent', () => {
  let component: ContentDesktopComponent;
  let fixture: ComponentFixture<ContentDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
