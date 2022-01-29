import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss'],
})
export class FormRegisterComponent implements OnInit {
  loading = false;
  user: any = {};

  constructor() {}

  ngOnInit(): void {}

  submit(): void {}
}
