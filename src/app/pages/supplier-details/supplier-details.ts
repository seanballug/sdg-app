import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api';
import { Supplier } from '../../models/supplier';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-supplier-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './supplier-details.html'
})
export class SupplierDetailsComponent {

  supplier?: Supplier;

  constructor(private route: ActivatedRoute, private api: ApiService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.api.getSupplier(id).subscribe(data => {
      this.supplier = data;
    });
  }
}