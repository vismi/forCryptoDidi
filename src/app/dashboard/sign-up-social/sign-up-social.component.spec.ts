import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpSocialComponent } from './sign-up-social.component';

describe('SignUpSocialComponent', () => {
  let component: SignUpSocialComponent;
  let fixture: ComponentFixture<SignUpSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
