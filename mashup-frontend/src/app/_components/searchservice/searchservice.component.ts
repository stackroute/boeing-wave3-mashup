import { Component, OnInit } from '@angular/core';
import { SearchserviceService } from './../../services/searchservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-searchservice',
  templateUrl: './searchservice.component.html',
  styleUrls: ['./searchservice.component.css']
})
export class SearchserviceComponent implements OnInit {

  // questionTitle: string;
  tag: string;
  // questionDescription: string;
  // public go;
  // public fetch: string;
  constructor(private _route: ActivatedRoute, private router: Router, public fetchservice: SearchserviceService) { }
  // public tags: string;
  ngOnInit() {
  }
  search(): any {
   
    this.router.navigate(['/display',this.tag]);
    console.log(this.tag+"origin");
  }

}
