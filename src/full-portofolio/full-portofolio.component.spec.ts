import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPortofolioComponent } from './full-portofolio.component';

describe('FullPortofolioComponent', () => {
  let component: FullPortofolioComponent;
  let fixture: ComponentFixture<FullPortofolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullPortofolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullPortofolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
