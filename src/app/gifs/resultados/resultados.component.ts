import { Component, OnInit } from '@angular/core';
import { Gif } from '../interfaces/gifs.interfaces';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent  {

  get resultados(): Gif[]{
    return this.gifsService.resultados;
  }

  constructor(private gifsService:GifsService) { }

}
