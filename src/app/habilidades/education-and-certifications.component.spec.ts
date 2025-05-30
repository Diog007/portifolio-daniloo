import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationAndCertificationsComponent } from './education-and-certifications.component';

describe('EducationAndCertificationsComponent', () => {
  let component: EducationAndCertificationsComponent;
  let fixture: ComponentFixture<EducationAndCertificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationAndCertificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationAndCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
