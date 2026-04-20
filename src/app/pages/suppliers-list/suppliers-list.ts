import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Supplier } from '../../models/supplier';

@Component({
  selector: 'app-suppliers-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './suppliers-list.html'
})
export class SuppliersListComponent {

  suppliers$: Observable<Supplier[]>;

  constructor(private api: ApiService, private router: Router) {
    this.suppliers$ = this.api.getSuppliers();
  }

  view(id: number) {
    this.router.navigate(['/suppliers', id]);
  }
}