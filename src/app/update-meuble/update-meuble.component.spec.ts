import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMeubleComponent } from './update-meuble.component';

describe('UpdateMeubleComponent', () => {
  let component: UpdateMeubleComponent;
  let fixture: ComponentFixture<UpdateMeubleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMeubleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMeubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
