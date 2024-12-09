import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecompositionPlaceValueComponent } from './decomposition-place-value.component';

describe('DecompositionPlaceValueComponent', () => {
  let component: DecompositionPlaceValueComponent;
  let fixture: ComponentFixture<DecompositionPlaceValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecompositionPlaceValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecompositionPlaceValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
