import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('item') item : any;
  @Input('type') type : string;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToArtistPage(){
    console.log("Ir a la pagina del artista")
    this.router.navigate(['/artist', this.item.id])
  }

}
