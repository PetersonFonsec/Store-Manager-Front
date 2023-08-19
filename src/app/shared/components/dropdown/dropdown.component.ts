import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Output() selected = new EventEmitter<any>();
  @Input() itens: string[] = [];
  show = false;

  constructor() { }

  ngOnInit(): void {}

  _emit(item: string) {
    this.show = false;
    this.selected.emit(item);
  }

  toggleList() {
    this.show = !this.show;
  }
}
