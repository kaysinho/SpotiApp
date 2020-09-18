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
    this.service.searchArtist(search)
      .subscribe( data => {
        console.log(data.artists.items)
        this.artists = data.artists.items
      })
  }

}
