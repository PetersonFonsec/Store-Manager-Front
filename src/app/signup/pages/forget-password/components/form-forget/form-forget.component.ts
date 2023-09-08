import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription, take } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { SucessComponent } from '../sucess/sucess.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-form-forget',
  templateUrl: './form-forget.component.html',
  styleUrls: ['./form-forget.component.scss'],
})
export class FormForgetComponent implements OnDestroy {
  subscription!: Subscription;
  errorMessage = '';
  loading = false;
  user: any = {};

  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private router: Router,
  ) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  submit(): void {
    this.errorMessage = '';
    this.loading = true;

    this.subscription = this.authService.forget(this.user.email).subscribe({
      next: () => {
        this.loading = false;
        this.openSuccessModal(
          'Em breve você recebera um email com os próximos passos.',
        );
      },
      error: ({ error }: HttpErrorResponse) => {
        this.errorMessage = error.message;
        this.loading = false;
      },
    });
  }

  openSuccessModal(data: string) {
    this.dialog.open(SucessComponent, { data });
  }
}
