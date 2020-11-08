import {Component, OnInit} from '@angular/core';
import {Person} from '../../model/person.model';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public people: Person[] = [];
  constructor() {
  }
  ngOnInit(): void {
    const user: Person = {
      firstName: 'Mateusz',
      lastName: 'Stanczak'
    };
    const userTwo: Person = {
      firstName: 'Adam',
      lastName: 'Mickiewicz'
    };
    this.people.push(user, userTwo);
  }
}
