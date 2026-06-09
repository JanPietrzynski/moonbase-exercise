import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Mission } from './missions';

const MISSIONS_API_URL = 'http://localhost:3000/missions';

type MissionResponse = Omit<Mission, 'launchDate'> & { launchDate: string };

@Injectable({
  providedIn: 'any',
})
export class MissionsService {
  constructor(private http: HttpClient) {}

  getMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(MISSIONS_API_URL);
  }

  getMission(id: string): Observable<Mission> {
    return this.http
      .get<MissionResponse>(`${MISSIONS_API_URL}/${id}`)
      .pipe(map((mission) => this.toMission(mission)));
  }

  private toMission({ launchDate, ...mission }: MissionResponse): Mission {
    return { ...mission, launchDate: new Date(launchDate) };
  }
}
