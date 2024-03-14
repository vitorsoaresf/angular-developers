import { Component } from '@angular/core';
import { MainComponent } from '../../components/main/main.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
