import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './layout/menu/menu.component';
import { MenuItem } from './layout/menu/menu-item/menu-item.component';

const menu: MenuItem[] = [
  {
    title: 'Home',
    icon: 'bi-house',
    route: '/',
    children: []
  },
  {
    title: 'Notifications',
    icon: 'bi-bell',
    route: '/notifications',
    children: []
  },
  {
    title: 'Group',
    icon: 'bi-collection',
    route: '',
    children: [
      {
        title: 'First Group',
        icon: 'bi-collection-fill',
        route: '/first-group',
        children: []
      },
      {
        title: 'Second Group',
        icon: 'bi-collection-play',
        route: '/second-group',
        children: []
      },
    ]
  },
  {
    title: 'Link',
    icon: 'bi-link',
    route: '/link',
    children: []
  },
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
