import { Component } from '@angular/core';

export interface MenuItem {
  title: string;
  icon: string;
  route: string;
  children: MenuItem[];
}

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {

}
