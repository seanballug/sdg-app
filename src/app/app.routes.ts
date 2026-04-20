import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { SuppliersListComponent } from './pages/suppliers-list/suppliers-list';
import { SupplierDetailsComponent } from './pages/supplier-details/supplier-details';
import { About } from './pages/about/about';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', component: Dashboard },

  { path: 'suppliers', component: SuppliersListComponent },
  { path: 'suppliers/:id', component: SupplierDetailsComponent },

  { path: 'about', component: About },

  // guard applied
  { path: 'secure', component: Dashboard, canActivate: [authGuard] },

  // wildcard (REQUIRED)
  { path: '**', redirectTo: '' }
];