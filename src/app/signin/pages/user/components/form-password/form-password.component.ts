import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { UserState } from 'src/app/shared/stores/reducers/user.reducers';

export interface IFormPasswordFields extends UserState {
  new_password: string
  confirm_password: string
  current_password: string
}

@Component({
  selector: 'app-form-password',
  templateUrl: './form-password.component.html',
  styleUrls: ['./form-password.component.scss']
})
export class FormPasswordComponent implements OnInit {
  @Output() submit = new EventEmitter<IFormPasswordFields>();
  @Input() loading = false;
  form!: UntypedFormGroup;
  user!: UserState;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private store: Store<{ user: UserState }>
  ){
    store.select('user')
      .pipe(take(1))
      .subscribe((user) => this.user = user);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      new_password: [null, Validators.required],
      confirm_password: [null, Validators.required],
      current_password: [null, Validators.required],
    });
  }

  _submit(event: Event): void {
    event.stopPropagation();
    const form = this.form.getRawValue();
    this.submit.emit({ ...this.user, ...form});
  }
}
