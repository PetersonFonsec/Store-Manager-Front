import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent implements OnDestroy {
  subscription!: Subscription;
  errorMessage = '';
  loading = false;
  user: any = {};

  constructor(private authService: AuthService, private router: Router) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  submit(): void {
    this.errorMessage = '';
    this.loading = true;

    this.subscription = this.authService.login(this.user).subscribe({
      next: async () => await this.router.navigateByUrl('/'),
      error: ({ message }) => {
        this.errorMessage = message;
        this.loading = false;
      },
    });
  }
}
