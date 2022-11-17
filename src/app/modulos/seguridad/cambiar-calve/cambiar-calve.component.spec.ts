import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarCalveComponent } from './cambiar-calve.component';

describe('CambiarCalveComponent', () => {
  let component: CambiarCalveComponent;
  let fixture: ComponentFixture<CambiarCalveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiarCalveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambiarCalveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
