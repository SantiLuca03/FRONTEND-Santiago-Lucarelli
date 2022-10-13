import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteresesYHabilidadesComponent } from './intereses-y-habilidades.component';

describe('InteresesYHabilidadesComponent', () => {
  let component: InteresesYHabilidadesComponent;
  let fixture: ComponentFixture<InteresesYHabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteresesYHabilidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteresesYHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
