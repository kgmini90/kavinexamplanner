import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'kavinexamplanner';
  constructor(private router: Router) {}
  submit() {
    console.log('Clicked');
    this.router.navigate(['/wsr-status-update/404']);
  }
}
