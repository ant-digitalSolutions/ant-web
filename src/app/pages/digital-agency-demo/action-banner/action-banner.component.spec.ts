import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionBannerComponent } from './action-banner.component';

describe('ActionBannerComponent', () => {
  let component: ActionBannerComponent;
  let fixture: ComponentFixture<ActionBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
