import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  
  photoCover: string = "https://cdn.marvel.com/content/1x/ironman_lob_mas_hlf_02.jpg"
  contentTitle: string = "NOTICIA EXEMPLO"
  contentDescription: string = "descrição teste"

}
