import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todos: string[] = ['Do homework', 'Pet a dog', 'Wash dishes'];
  constructor() { }

  ngOnInit(): void {
  }

  showAlert() {
    alert('showAlert() on Parent');
  }
}
