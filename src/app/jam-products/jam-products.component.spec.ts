import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JamProductsComponent } from './jam-products.component';

describe('JamProductsComponent', () => {
  let component: JamProductsComponent;
  let fixture: ComponentFixture<JamProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JamProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JamProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
