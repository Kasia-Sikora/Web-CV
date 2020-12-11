import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendProjectDetailComponent } from './frontend-project-detail.component';

describe('ProjectDetailComponent', () => {
  let component: FrontendProjectDetailComponent;
  let fixture: ComponentFixture<FrontendProjectDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontendProjectDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendProjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
