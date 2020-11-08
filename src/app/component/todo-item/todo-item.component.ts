import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem: string;
  @Output() onChange = new EventEmitter();
  constructor() {
  }
  ngOnInit(): void {
  }
  buttonHasBeenClicked(): void {
    this.onChange.emit();
  }
}
