import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss'],
})
export class FormSearchComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  @Input() placeholder = '';
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      search: [null, Validators.required],
    });
  }

  submit(): void {
    const { search } = this.form.getRawValue();
    this.search.emit(search);
  }
}
