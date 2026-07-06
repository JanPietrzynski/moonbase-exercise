import { DatePipe } from '@angular/common';
import {
  Component,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';

import { Mission as MissionModel } from '../missions';
import { MissionsService } from '../missions-service';

@Component({
  selector: 'app-mission',
  imports: [DatePipe, MatIconModule, MatTableModule],
  templateUrl: './mission.html',
  styleUrl: './mission.scss',
})
export class Mission implements OnInit {
  private route = inject(ActivatedRoute);
  private missionsService = inject(MissionsService);

  protected readonly mission = signal<MissionModel | undefined>(undefined);
  protected readonly displayName = signal('');
  protected readonly summaryColumns = ['label', 'value'];

  private readonly routeMission = toSignal(
    this.route.paramMap.pipe(
      map((params) => params.get('id')!),
      switchMap((id) => this.missionsService.getMission(id)),
    ),
  );

  constructor() {
    effect(() => {
      const mission = this.mission();
      if (mission) {
        this.displayName.set(mission.name);
      }
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.missionsService.getMission(id).subscribe((mission) => {
      this.mission.set(mission);
    });
  }

  protected summaryRows(mission: MissionModel): { label: string; value: string }[] {
    return [
      { label: 'Status', value: mission.status },
      { label: 'Priority', value: mission.priority },
      { label: 'Crew', value: String(mission.crewSize) },
    ];
  }
}
