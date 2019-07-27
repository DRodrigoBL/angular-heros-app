import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Hero } from '../../services/heroes.service';

@Component({
  selector: 'app-found-heros',
  templateUrl: './found-heros.component.html',
  styleUrls: ['./found-heros.component.css']
})
export class FoundHerosComponent implements OnInit {

  heroes: Hero[];
  heroToSearch: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.heroToSearch = params.name;
      this.heroes = this.heroesService.searchHeroes(params.name);
    });
  }
}
