import { Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {OrderComponent} from "./components/order/order.component";
import {ClientComponent} from "./components/client/client.component";
import {CardComponent} from "./components/card/card.component";
import {AuthGuard} from "./components/_guard/auth.guard";
import {ReportComponent} from "./components/report/report.component";
import {AccessDeniedComponent} from "./components/utils/accessDenied.component";

export const routes: Routes = [
  {path: '', redirectTo: '/orders', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'orders', component: OrderComponent, canActivate: [AuthGuard]},
  {path: 'clients', component: ClientComponent, canActivate: [AuthGuard]},
  {path: 'cards', component: CardComponent, canActivate: [AuthGuard]},
  {path: 'reports', component: ReportComponent, canActivate: [AuthGuard]},
  {path: 'access', component: AccessDeniedComponent, canActivate: [AuthGuard]}
];
