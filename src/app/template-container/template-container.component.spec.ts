import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateContainerComponent } from './template-container.component';

describe('TemplateContainerComponent', () => {
  let component: TemplateContainerComponent;
  let fixture: ComponentFixture<TemplateContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
