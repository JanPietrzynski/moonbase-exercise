import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';

import { Mission } from './mission';

describe('Mission', () => {
  let component: Mission;
  let fixture: ComponentFixture<Mission>;
  let httpTesting: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mission],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({ id: 'ASR482917' })),
            snapshot: { paramMap: convertToParamMap({ id: 'ASR482917' }) },
          },
        },
      ],
    }).compileComponents();

    httpTesting = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(Mission);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const missionResponse = {
      id: 'ASR482917',
      name: 'Artemis Supply Run',
      shortDescription:
        'Resupply the south pole base with food, equipment, and spare parts.',
      description:
        'A high-priority logistics mission delivering 12 metric tons of consumables and spare life-support components to Artemis Base Camp.',
      launchDate: '2026-05-12T14:23:17.000Z',
      status: 'active',
      priority: 'high',
      crewSize: 4,
    };

    httpTesting
      .match('http://localhost:3000/missions/ASR482917')
      .forEach((req) => req.flush(missionResponse));
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
