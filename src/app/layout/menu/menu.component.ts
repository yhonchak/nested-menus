import { Component, Input } from '@angular/core';
import { MenuItem, MenuItemComponent } from './menu-item/menu-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuItemComponent, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Input({required: true}) menuItems: MenuItem[] | [] = [];
}
