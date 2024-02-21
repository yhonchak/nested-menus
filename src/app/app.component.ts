import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './layout/menu/menu.component';
import { MenuItem } from './layout/menu/menu-item/menu-item.component';

const MENU: MenuItem[] = [
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
        title: 'Screen 1',
        icon: 'bi-collection-fill',
        route: '/first-group',
        children: []
      },
      {
        title: 'Screen 2',
        icon: 'bi-collection-play',
        route: '/second-group',
        children: []
      },
      {
        title: '2nd Level Group',
        icon: 'bi-list-nested',
        route: '',
        children: [
          {
            title: '2nd Level Screen',
            icon: 'bi-2-circle',
            route: '/link',
            children: []
          },
          {
            title: '3rd Level Group',
            icon: 'bi-3-circle',
            route: '',
            children: [
              {
                title: '3rd Level Screen',
                icon: 'bi-3-square',
                route: '/notifications',
                children: []
              }
            ]
          },
        ]
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

  /**
   * Returns menu items from the constant.
   */
  get menuItems(): MenuItem[] {
    return MENU;
  }
}
