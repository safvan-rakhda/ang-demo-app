import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfountdemoComponent } from './notfountdemo.component';

describe('NotfountdemoComponent', () => {
  let component: NotfountdemoComponent;
  let fixture: ComponentFixture<NotfountdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotfountdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotfountdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
