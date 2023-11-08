import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkteltonLoadingComponent } from './sktelton-loading.component';

describe('SkteltonLoadingComponent', () => {
  let component: SkteltonLoadingComponent;
  let fixture: ComponentFixture<SkteltonLoadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkteltonLoadingComponent]
    });
    fixture = TestBed.createComponent(SkteltonLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
