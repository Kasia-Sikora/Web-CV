import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendProjectComponent } from './frontend-project.component';

describe('ProjectDetailComponent', () => {
  let component: FrontendProjectComponent;
  let fixture: ComponentFixture<FrontendProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontendProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
