import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JamListComponent } from './jam-list.component';

describe('JamListComponent', () => {
  let component: JamListComponent;
  let fixture: ComponentFixture<JamListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JamListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
