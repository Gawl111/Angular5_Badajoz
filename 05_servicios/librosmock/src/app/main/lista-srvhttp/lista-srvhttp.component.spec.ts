import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSrvhttpComponent } from './lista-srvhttp.component';

describe('ListaSrvhttpComponent', () => {
  let component: ListaSrvhttpComponent;
  let fixture: ComponentFixture<ListaSrvhttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSrvhttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSrvhttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
