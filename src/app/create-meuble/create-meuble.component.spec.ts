import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMeubleComponent } from './create-meuble.component';

describe('CreateMeubleComponent', () => {
  let component: CreateMeubleComponent;
  let fixture: ComponentFixture<CreateMeubleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMeubleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMeubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
