import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McompComponent } from './mcomp.component';

describe('McompComponent', () => {
  let component: McompComponent;
  let fixture: ComponentFixture<McompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
