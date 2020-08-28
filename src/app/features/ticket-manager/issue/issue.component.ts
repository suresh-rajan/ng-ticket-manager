import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface IssueParam {
  id?: string;
  mode?: string;
}

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  params: IssueParam = {} ;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  initialize() {
    this.route.paramMap.subscribe( param => {
      this.params = param as IssueParam;
      const mode = this.params.mode;
      const id = this.params.id;
      const userId = localStorage.getItem('userId');
    });
  }

}
