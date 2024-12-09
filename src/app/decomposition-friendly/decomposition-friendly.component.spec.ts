import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecompositionFriendlyComponent } from './decomposition-friendly.component';

describe('DecompositionFriendlyComponent', () => {
  let component: DecompositionFriendlyComponent;
  let fixture: ComponentFixture<DecompositionFriendlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecompositionFriendlyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecompositionFriendlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
