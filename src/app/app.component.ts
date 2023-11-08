import { Component, OnInit } from '@angular/core';
import { UrlService } from './services/url.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'url-shortener';
  shortenUrl: string;

  constructor(private urlService: UrlService) { }
  users: any[] = [];
  hasPermission = false;

  constructor() {}
        
  ngOnInit(): any {
    if (this.hasPermission) {
      this.users = this.getUsers();
    } else {
      this.users = [];
      this.callLoop()

    }
  }
  getUsers() {
    return [1, 2, 3, 4, 5];
  }
   
   callLoop(){
    for(let i=0;i<5;i++){
      //console.log('Looping..');
    }
  }

  add(url: string): void {
    url = url.trim();
    
    if (!url) return;

    this.urlService.save(url).subscribe(res => this.shortenUrl = window.location.href + res.id);
  }
  
}
