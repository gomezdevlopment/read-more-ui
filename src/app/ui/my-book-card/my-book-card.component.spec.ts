import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBookCardComponent } from './my-book-card.component';

describe('MyBookCardComponent', () => {
  let component: MyBookCardComponent;
  let fixture: ComponentFixture<MyBookCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBookCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyBookCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
