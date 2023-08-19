import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';

export interface InputPhotoValue {
  b64: string;
  file: any;
}

@Component({
  selector: 'app-input-photo',
  templateUrl: './input-photo.component.html',
  styleUrls: ['./input-photo.component.scss'],
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPhotoComponent),
    },
  ],
})
export class InputPhotoComponent implements OnInit, ControlValueAccessor {
  @Input() id = '';
  @Input() initialImage?: string = '';

  urlBase = environment.urlApi;
  iconUpload = faCloudUploadAlt;
  val: InputPhotoValue = {
    b64: '',
    file: '',
  };

  ngOnInit(): void {}

  onChange: any = () => {};

  onTouched: any = () => {};

  get value() {
    return this.val;
  }

  set value(val) {
    if (val !== undefined && val !== null) {
      this.val = val;
      this.onChange(val);
      this.onTouched(val);
    }
  }

  onBlur() {}

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  showImage(event: any): void {
    const files: FileList = event.target.files;
    const reader = new FileReader();

    reader.onload = () => {
      this.value = {
        b64: reader.result as string,
        file: files[0],
      };
    };

    reader.readAsDataURL(files[0]);
  }
}
