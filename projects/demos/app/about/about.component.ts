import { Component, ChangeDetectionStrategy } from '@angular/core';

interface TeamMember {
  name: string;
  role: string;
}

@Component({
  selector: 'mwl-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'about.component.html',
})
export class AboutComponent {
  team: TeamMember[] = [
    { name: 'Ada Lovelace', role: 'Lead Engineer' },
    { name: 'Alan Turing', role: 'Maintainer' },
    { name: 'Grace Hopper', role: 'Developer Advocate' },
  ];
}
