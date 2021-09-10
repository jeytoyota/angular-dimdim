import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBoletoComponent } from './delete-boleto.component';

describe('DeleteBoletoComponent', () => {
  let component: DeleteBoletoComponent;
  let fixture: ComponentFixture<DeleteBoletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteBoletoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBoletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
