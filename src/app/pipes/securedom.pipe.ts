import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'securedom'
})
export class SecuredomPipe implements PipeTransform {

  constructor(private domSanitizer:DomSanitizer){

  }

  transform(value: string): any {
    const uri: string = "https://open.spotify.com/embed/track/"
    return this.domSanitizer.bypassSecurityTrustResourceUrl(uri+value.slice(14));
  }

}
