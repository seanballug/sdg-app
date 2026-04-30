import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suppliers-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './suppliers-list.html'
})
export class SuppliersListComponent {

  users$: Observable<User[]>;

  constructor(private api: ApiService, private router: Router) {
    this.users$ = this.api.getUsers();
  }

  view(id: number) {
    this.router.navigate(['/suppliers', id]);
  }
}