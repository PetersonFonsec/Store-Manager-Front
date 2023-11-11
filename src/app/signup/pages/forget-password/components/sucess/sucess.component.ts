import { Component, OnInit, Inject } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sucess',
  templateUrl: './sucess.component.html',
  styleUrls: ['./sucess.component.scss'],
})
export class SucessComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public message: string,
    private router: Router,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {}

  async redirect(): Promise<void> {
    await this.router.navigateByUrl('/');
    this.dialog.closeAll();
  }
}
