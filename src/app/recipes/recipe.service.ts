import {  Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe', 
            'This is simply test', 
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/spaghetti-puttanesca_1-1ce4e81.jpg?quality=90&resize=440%2C400',
            [
                new Ingredient('Meat',1),
                new Ingredient('French Fries',20),
            ]
        ),
        new Recipe(
            'Pasta', 
            'This is second test', 
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7QCcOwqOwMPbBpgcUhc6KJ8Zjv0YAjJNL7w&usqp=CAU',
            [
                new Ingredient('Meat', 3),
                new Ingredient('Tomatos',4),
            ]
        )  
      ];
      
      constructor(private slService: ShoppingListService) {}

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number) {
          return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}