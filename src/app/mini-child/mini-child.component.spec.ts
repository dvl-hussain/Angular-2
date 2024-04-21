import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniChildComponent } from './mini-child.component';

describe('MiniChildComponent', () => {
  let component: MiniChildComponent;
  let fixture: ComponentFixture<MiniChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiniChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
