import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvocadoCartComponent } from './avocado-cart.component';

describe('AvocadoCartComponent', () => {
  let component: AvocadoCartComponent;
  let fixture: ComponentFixture<AvocadoCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvocadoCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvocadoCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
