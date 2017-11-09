import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGoogleComponent } from './lista-google.component';

describe('ListaGoogleComponent', () => {
  let component: ListaGoogleComponent;
  let fixture: ComponentFixture<ListaGoogleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaGoogleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
