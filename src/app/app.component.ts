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
        title: '1st Screen',
        icon: 'bi-collection-fill',
        route: '/first-group',
        children: []
      },
      {
        title: '2nd Screen',
        icon: 'bi-collection-play',
        route: '/second-group',
        children: []
      },
      {
        title: '3rd Level Group',
        icon: 'bi-list-nested',
        route: '',
        children: [
          {
            title: '3rd Level Screen',
            icon: 'bi-3-circle',
            route: '/link',
            children: []
          },
          {
            title: '4th Level Group',
            icon: 'bi-4-circle',
            route: '',
            children: [
              {
                title: '4th Level Screen',
                icon: 'bi-4-square',
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
