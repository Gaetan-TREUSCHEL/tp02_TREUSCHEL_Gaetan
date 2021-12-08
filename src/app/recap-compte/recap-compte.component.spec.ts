import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapCompteComponent } from './recap-compte.component';

describe('RecapCompteComponent', () => {
  let component: RecapCompteComponent;
  let fixture: ComponentFixture<RecapCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecapCompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
