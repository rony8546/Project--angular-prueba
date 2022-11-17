import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentificacionComponent } from './indentificacion.component';

describe('IndentificacionComponent', () => {
  let component: IndentificacionComponent;
  let fixture: ComponentFixture<IndentificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndentificacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndentificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
