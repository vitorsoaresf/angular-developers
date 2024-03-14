import { Component } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  userList = [
    {
      name: 'Alex',
      image: 'assets/image/josefine.jpg',
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      name: 'Lucy',
      image: 'assets/image/lucy.jpg',
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      name: 'Robert',
      image: 'assets/image/robert.jpg',
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      name: 'Rodolf',
      image: 'assets/image/rodolf.jpg',
      description: 'Lorem ipsum dolor sit amet',
    },
  ];
}
