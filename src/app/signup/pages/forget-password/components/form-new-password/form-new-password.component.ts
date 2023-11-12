import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { SucessComponent } from '../sucess/sucess.component';
import { IRecovertPasswordRequest } from 'src/app/shared/services/auth/auth.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-new-password',
  templateUrl: './form-new-password.component.html',
  styleUrls: ['./form-new-password.component.scss'],
})
export class FormNewPasswordComponent implements OnInit, OnDestroy {
  user: any = {};
  subscription!: Subscription;
  errorMessage = '';
  loading = false;
  token = '';

  constructor(
    private authService: AuthService,
    private router: ActivatedRoute,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      const token = params.get('token');
      if (token) this.token = token;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  submit(): void {
    this.errorMessage = '';
    this.loading = true;
    this.user.token = this.token;

    this.subscription = this.authService.recovertPassword(this.user).subscribe({
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
