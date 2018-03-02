import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question-graph',
  templateUrl: './question-graph.component.html',
  styleUrls: ['./question-graph.component.css']
})
export class QuestionGraphComponent implements OnInit {
  @Input() totalQuestion;
  constructor() { }

  ngOnInit() {
  }

}
