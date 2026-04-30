import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-supplier-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './supplier-details.html'
})
export class SupplierDetailsComponent {

  user$!: Observable<User>;

  constructor(private route: ActivatedRoute, private api: ApiService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.user$ = this.api.getUser(id);
  }
}