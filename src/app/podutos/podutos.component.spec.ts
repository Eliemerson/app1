import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodutosComponent } from './podutos.component';

describe('PodutosComponent', () => {
  let component: PodutosComponent;
  let fixture: ComponentFixture<PodutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
