import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  token : string ="BQDCsU3cMsHgKWYKlEV2A7J5qAbLEZvo6ykAcUWStj73lN4Ri8bDq8D_-JQnKwbcQf9kISKog4aa7mXuoTc"
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
}
