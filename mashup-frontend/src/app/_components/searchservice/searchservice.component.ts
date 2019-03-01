import { SearchserviceService } from './../../services/searchservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-searchservice',
  templateUrl: './searchservice.component.html',
  styleUrls: ['./searchservice.component.css']
})
export class SearchserviceComponent implements OnInit {

  questionTitle: string;
  tag: string;
  questionDescription: string;
  public go;
  public fetch: string;
  constructor(private _route: ActivatedRoute, private router: Router, public fetchservice: SearchserviceService) { }
  public tags: string;
  ngOnInit() {
  }
  search(): any {
     this.fetchservice.findQuestion(this.tag)
            .subscribe(data => this.fetch = data
              );
  }
}

//   search(): any {
//     console.log(' mai idhar hu');
//     this.go = this.fetchservice.findQuestion(this.tags)
//     .subscribe(
//       data => {
//         this.fetch = data;
//         console.log(data);
//       },
//       error => {
//         console.log('some error occured');
//         console.log(error.errorMessage);
//       }
//     );
//   }
// }

