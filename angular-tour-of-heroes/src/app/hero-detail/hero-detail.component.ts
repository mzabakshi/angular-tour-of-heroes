import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [NgIf, NgFor, UpperCasePipe, FormsModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
