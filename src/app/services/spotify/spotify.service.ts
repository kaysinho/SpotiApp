import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  token : string ="BQCotZrbGioZPVdpLyqJtn3QPBKx4I0a6hxsCm6gA5Nii9E2GXDHsdAgbSOyJ_rGecsfiwopLEl7s0JMDYM"
  constructor(private http:HttpClient) { }

  getNewReleases():Observable<any>{
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${this.token}`
    })

    return this.http.get("https://api.spotify.com/v1/browse/new-releases?limit=20&offset=5", {headers})
  }

  searchArtist(artist:string):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${this.token}`
    })

    return this.http.get(`https://api.spotify.com/v1/search?q=${artist}&type=artist&limit=15`, {headers})
  }

  getArtist(id:string){
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${this.token}`
    })

    return this.http.get(`https://api.spotify.com/v1/artists/${id}`, {headers})
  }

  getTopTracks(idArtist:string){
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${this.token}`
    })

    return this.http.get(`https://api.spotify.com/v1/artists/${idArtist}/top-tracks?country=US`, {headers})
  }
}
