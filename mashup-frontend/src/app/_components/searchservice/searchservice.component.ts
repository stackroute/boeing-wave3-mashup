import { Component, OnInit } from '@angular/core';
import { SearchserviceService } from './../../services/searchservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-searchservice',
  templateUrl: './searchservice.component.html',
  styleUrls: ['./searchservice.component.css']
})
export class SearchserviceComponent implements OnInit {

  tag: string;
  interval;
  timeStart = 0;
  constructor(private _route: ActivatedRoute, private router: Router, public fetchservice: SearchserviceService) { }
  ngOnInit() {
  }
  search(): any {
    this.interval = setInterval(() => {
      if ( this.timeStart < 0.5) {
        // clearInterval(this.interval);
        this.timeStart++;
      } else {
        this.router.navigate(['/display', this.tag]);
        clearInterval(this.interval);
      }
    }, 1000);    
  }

}
