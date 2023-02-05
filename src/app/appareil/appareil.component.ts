import {Component, Input, OnInit} from '@angular/core';
import { Appareil } from '../appareil/Appareil'


@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareil! : Appareil

  ngOnInit(): void {
    throw new Error('Méthode non implémenté.');
  }

}
