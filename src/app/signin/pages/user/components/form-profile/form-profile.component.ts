import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { InputPhotoValue } from 'src/app/shared/components/inputs/input-photo/input-photo.component';
import { UserState } from 'src/app/shared/stores/reducers/user.reducers';

@Component({
  selector: 'app-form-profile',
  templateUrl: './form-profile.component.html',
  styleUrls: ['./form-profile.component.scss']
})
export class FormProfileComponent implements OnInit {
  @Output() submit = new EventEmitter<UserState & {photo: InputPhotoValue}>();
  @Input() loading = false;
  user!: UserState;
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<{ user: UserState }>
  ){
    store.select('user')
      .pipe(take(1))
      .subscribe((user) => this.user = user);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      photo: [null],
      name: [this.user.name, Validators.required],
    });
  }

  _submit(event: Event): void {
    event.stopPropagation();

    const form = this.form.getRawValue();
    const user = {...this.user} as UserState & {photo: InputPhotoValue};
    user.name = form.name;

    if(form.photo) user.photo = form.photo.file;

    this.submit.emit(user);
  }
}
