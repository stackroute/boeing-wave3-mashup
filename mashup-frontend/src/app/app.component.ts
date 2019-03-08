import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';
import { RouterOutlet } from '@angular/router';
// import { slider } from './route-animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    //fader,
    //slider,
    //transformer,
    //stepper
  ]
})
export class AppComponent implements OnInit {
  private roles: string[];
  private authority: string;

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        this.authority = 'user';
        return true;
      });
    }
  }

  prepareRoute(outlet: RouterOutlet){
    return outlet &&  outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
