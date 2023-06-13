import { Component } from '@angular/core';

@Component({
  selector: 'app-anuncio-form',
  templateUrl: './anuncio-form.component.html',
  styleUrls: ['./anuncio-form.component.css']
})
export class AnuncioFormComponent implements OnInit{
 anuncioForm: FormGroup;
}
