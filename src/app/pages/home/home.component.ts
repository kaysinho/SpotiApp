import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  releases: Array<any> = []
  constructor(private service:SpotifyService) { }

  ngOnInit(): void {
    this.getNewReleases()
  }

  getNewReleases(){
    this.service.getNewReleases()
      .subscribe(data =>{
        this.releases = data.albums.items;
      })
  }

}
