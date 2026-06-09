import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { MissionStatus } from './mission-status';

describe('MissionStatus', () => {
  let fixture: ComponentFixture<MissionStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionStatus],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(MissionStatus);
    fixture.componentRef.setInput('missions', []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
