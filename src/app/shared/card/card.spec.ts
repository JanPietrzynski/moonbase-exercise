import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card } from './card';

describe('Card', () => {
  let component: Card;
  let fixture: ComponentFixture<Card>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card],
    }).compileComponents();

    fixture = TestBed.createComponent(Card);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('title', 'Total Missions');
    fixture.componentRef.setInput('value', 12);
    fixture.componentRef.setInput('icon', 'rocket');
    fixture.componentRef.setInput('iconColor', '#4868e9');
    fixture.componentRef.setInput('bgColor', '#e8edfd');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
