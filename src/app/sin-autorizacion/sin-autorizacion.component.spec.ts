import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinAutorizacionComponent } from './sin-autorizacion.component';

describe('SinAutorizacionComponent', () => {
  let component: SinAutorizacionComponent;
  let fixture: ComponentFixture<SinAutorizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinAutorizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinAutorizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
