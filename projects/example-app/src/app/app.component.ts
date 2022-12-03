import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'my-org-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    // SA
    RouterOutlet,
    RouterLink,
    RouterLinkActive,

    // NgModules
    MatButtonModule,
    MatToolbarModule,
  ],
})
export class AppComponent {
  year = new Date().getFullYear();

}
