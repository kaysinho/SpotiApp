import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id:string
  artist: any
  tracks : Array<any> = []
  constructor(private service:SpotifyService, private activatedRoute:ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.id = data.id
      this.getArtist()
      this.getTopTracks()
    })
  }

  getArtist(){
    this.service.getArtist(this.id)
      .subscribe(artist=>{
        console.log(artist)
        this.artist = artist;

      })
  }

  getTopTracks(){
    this.service.getTopTracks(this.id)
      .subscribe( (topTracks:any) => {
        console.log(topTracks)
        this.tracks = topTracks.tracks;
      })
  }

}
