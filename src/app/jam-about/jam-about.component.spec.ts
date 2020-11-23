import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JamAboutComponent } from './jam-about.component';

describe('JamAboutComponent', () => {
  let component: JamAboutComponent;
  let fixture: ComponentFixture<JamAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JamAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JamAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
