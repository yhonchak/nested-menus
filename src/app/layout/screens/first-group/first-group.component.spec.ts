import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstGroupComponent } from './first-group.component';

describe('FirstGroupComponent', () => {
  let component: FirstGroupComponent;
  let fixture: ComponentFixture<FirstGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
