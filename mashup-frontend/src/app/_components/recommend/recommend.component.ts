import { QuestionserviceService } from "./../../services/questionservice.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-recommend",
  templateUrl: "./recommend.component.html",
  styleUrls: ["./recommend.component.css"]
})
export class RecommendComponent implements OnInit {
  constructor(
    public _route: ActivatedRoute,
    private router: Router,
    public fetchservice: QuestionserviceService
  ) {}
  public fetch;
  ngOnInit() {
    this.fetchservice.getallquestioninfo().subscribe(data => {
      this.fetch = data;
      console.log("complete data is ",data);
    });
  }
}
