import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artists :Array<any>
  constructor(private service:SpotifyService) { }

  ngOnInit(): void {
  }

  searchArtist(search:string){
    if (search == "") return;
    this.service.searchArtist(search)
      .subscribe( data => {
        this.artists = data.artists.items
      })
  }

}
