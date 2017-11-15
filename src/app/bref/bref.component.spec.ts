import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrefComponent } from './bref.component';

describe('BrefComponent', () => {
  let component: BrefComponent;
  let fixture: ComponentFixture<BrefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
