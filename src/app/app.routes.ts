import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { SuppliersListComponent } from './pages/suppliers-list/suppliers-list';
import { SupplierDetailsComponent } from './pages/supplier-details/supplier-details';
import { About } from './pages/about/about';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', component: DashboardComponent },

  { path: 'suppliers', component: SuppliersListComponent },
  { path: 'suppliers/:id', component: SupplierDetailsComponent },

  { path: 'about', component: About },

  { path: 'secure', component: DashboardComponent, canActivate: [authGuard] },

  { path: '**', redirectTo: '' }
];