import { Routes } from '@angular/router';
import { HomeComponent } from './layout/screens/home/home.component';
import { LinkComponent } from './layout/screens/link/link.component';
import { NotificationsComponent } from './layout/screens/notifications/notifications.component';
import { FirstGroupComponent } from './layout/screens/first-group/first-group.component';
import { SecondGroupComponent } from './layout/screens/second-group/second-group.component';

export const routes: Routes = [
  { path: '', title: 'Home Page', component: HomeComponent },
  { path: 'notifications', title: 'Notifications Page', component: NotificationsComponent },
  { path: 'first-group', title: 'First Group Page', component: FirstGroupComponent },
  { path: 'second-group', title: 'Second Group Page', component: SecondGroupComponent },
  { path: 'link', title: 'Link Page', component: LinkComponent },
];
