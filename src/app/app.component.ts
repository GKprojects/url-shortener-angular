import { Component } from '@angular/core';
import { UrlService } from './services/url.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'url-shortener';
  shortenUrl: string;

  constructor(private urlService: UrlService) { }
  function countToFive() {
    for (let i = 1; i <= 5; i++) {
      console.log(i);
    }
}

// Call the function to execute the loop
countToFive();

  add(url: string): void {
    url = url.trim();
    
    if (!url) return;

    this.urlService.save(url).subscribe(res => this.shortenUrl = window.location.href + res.id);
  }
  
}
