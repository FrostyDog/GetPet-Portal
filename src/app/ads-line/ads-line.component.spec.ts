import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsLineComponent } from './ads-line.component';

describe('AdsLineComponent', () => {
  let component: AdsLineComponent;
  let fixture: ComponentFixture<AdsLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
