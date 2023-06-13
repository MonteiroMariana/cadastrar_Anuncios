import { Component } from '@angular/core';
import { AnuncioService } from '../anuncio.service';

@Component({
  selector: 'app-anuncio-list',
  templateUrl: './anuncio-list.component.html',
  styleUrls: ['./anuncio-list.component.css']
})
export class AnuncioListComponent {

}
export class AnuncioListComponent implements OnInit {
  anuncios: Anuncio[];

  constructor(private anuncioService: AnuncioService) {}

  ngOnInit() {
    this.obterAnuncios();
  }

  obterAnuncios() {
    this.anuncioService.obterAnuncios()
      .subscribe(anuncios => {
        this.anuncios = anuncios;
      });
  }
}

