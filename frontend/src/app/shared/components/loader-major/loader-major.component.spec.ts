import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderMajorComponent } from './loader-major.component';

describe('LoaderMajorComponent', () => {
  let component: LoaderMajorComponent;
  let fixture: ComponentFixture<LoaderMajorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderMajorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderMajorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
