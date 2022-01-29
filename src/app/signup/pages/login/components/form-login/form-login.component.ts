import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent implements OnInit {
  user: any = {};
  loading = false;
  constructor() {}

  ngOnInit(): void {}
  submit(): void {}
}
