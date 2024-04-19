import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateProjectionComponent } from './template-projection.component';

describe('TemplateProjectionComponent', () => {
  let component: TemplateProjectionComponent;
  let fixture: ComponentFixture<TemplateProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateProjectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
