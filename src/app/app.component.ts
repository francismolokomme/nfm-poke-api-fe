import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // pokemons = [];

  constructor(private _router: Router) {}
  // reference
  // https://stackblitz.com/edit/angular-navigationextras?file=src%2Fapp%2Fproducts%2Fproduct-details.component.ts
  ngOnInit(): void {
    this._router.navigate(['/home']);
  }
}
