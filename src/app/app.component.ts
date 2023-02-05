
import { Component } from '@angular/core';
import {Appareil} from "./appareil/Appareil";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= "Appareils";

  appareils: Appareil[] = [
    {nom: "Macbook M1", nb: 12},
    {nom: "Apple 1", nb: 12}
  ];

  ngOnInit(): void {
    throw new Error('Méthode non implémenté.');
  }

}
