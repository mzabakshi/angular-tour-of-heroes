import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule, NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [NgIf, NgFor, UpperCasePipe, FormsModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent implements OnInit{
  @Input() hero?: Hero;

  constructor(private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ){}

  ngOnInit(): void {
    this.getHero();
  }

  getHero() : void {
    const id = Number(this.route.snapshot.paramMap.get('id')); 
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
