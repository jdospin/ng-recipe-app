import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe',
      'This is a recipe test',
      'https://live.staticflickr.com/5496/31479301445_cb53c0f4e9_b.jpg' ),
    new Recipe('Sea Food',
      'This is a healthy recipe made of seafood',
      'https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_960_720.jpg'),
    new Recipe('Pickled Garlic',
      'A delicious pickle recipe',
      'https://live.staticflickr.com/5836/30219331242_56aa4dfca9_b.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
