import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  
  photoCover: string = "https://cdn.marvel.com/content/1x/ironman_lob_mas_hlf_02.jpg"
  contentTitle: string = "NOTICIA EXEMPLO"
  contentDescription: string = "descrição teste"

  constructor(
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void { 
    this.route.paramMap.subscribe(value => {
      const id = value.get("id");
      console.log("ID recebido:", id);
    });
  }
}
