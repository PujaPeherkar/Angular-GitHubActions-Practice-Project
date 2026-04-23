import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildContentChild } from './view-child-content-child';

describe('ViewChildContentChild', () => {
  let component: ViewChildContentChild;
  let fixture: ComponentFixture<ViewChildContentChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildContentChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildContentChild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
