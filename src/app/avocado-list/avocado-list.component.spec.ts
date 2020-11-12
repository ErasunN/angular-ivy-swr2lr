import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvocadoListComponent } from './avocado-list.component';

describe('AvocadoListComponent', () => {
  let component: AvocadoListComponent;
  let fixture: ComponentFixture<AvocadoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvocadoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvocadoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
