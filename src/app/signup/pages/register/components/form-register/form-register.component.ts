import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss'],
})
export class FormRegisterComponent implements OnDestroy {
  subscription!: Subscription;
  errorMessage = '';
  loading = false;
  user: any = {};

  constructor(private authService: AuthService, private router: Router) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  submit(): void {
    this.loading = true;

    this.subscription = this.authService.signup(this.user).subscribe({
      next: async () => await this.router.navigateByUrl('/'),
      error: ({ message }) => (this.errorMessage = message),
      complete: () => (this.loading = false),
    });
  }
}
