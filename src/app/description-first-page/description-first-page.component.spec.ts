import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionFirstPageComponent } from './description-first-page.component';

describe('DescriptionFirstPageComponent', () => {
  let component: DescriptionFirstPageComponent;
  let fixture: ComponentFixture<DescriptionFirstPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionFirstPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionFirstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
