import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNumberComponent } from './list-number.component';

describe('ListNumberComponent', () => {
  let component: ListNumberComponent;
  let fixture: ComponentFixture<ListNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
