import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  
  selectedHero: Hero;
  
  heroes : Hero[];

  ngOnInit() {
    this.getHeroes();
  }

  constructor(private heroService: HeroService) { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes():void{
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }


}
