import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularRouting';
  //homeRoute = 'home';
  //settingsRoute = 'settings';

  routes = [
    { linkName: 'Home', URL: 'home' },
    { linkName: 'Create Profile', URL: 'settings/profile' },
    { linkName: 'Contact Us', URL: 'settings/contact' }
  ];
}
