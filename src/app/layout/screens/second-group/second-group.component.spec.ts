import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondGroupComponent } from './second-group.component';

describe('SecondGroupComponent', () => {
  let component: SecondGroupComponent;
  let fixture: ComponentFixture<SecondGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
