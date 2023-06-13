import { Component, Input } from '@angular/core';
import { Anuncio } from '../anuncio';

@Component({
  selector: 'app-anuncio-card',
  templateUrl: './anuncio-card.component.html',
  styleUrls: ['./anuncio-card.component.css']
})
export class AnuncioCardComponent {
  @Input() anuncio: Anuncio | undefined;
}
