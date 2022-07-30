import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAiueoComponent } from './product-aiueo.component';

describe('ProductAiueoComponent', () => {
  let component: ProductAiueoComponent;
  let fixture: ComponentFixture<ProductAiueoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAiueoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAiueoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
