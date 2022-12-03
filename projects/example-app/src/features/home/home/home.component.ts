import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'my-org-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}
