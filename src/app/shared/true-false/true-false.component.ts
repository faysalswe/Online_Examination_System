import { Component, OnInit, Input } from '@angular/core';
import { TrueFalse } from './True-false';

@Component({
  selector: 'app-true-false',
  templateUrl: './true-false.component.html',
  styleUrls: ['./true-false.component.css']
})
export class TrueFalseComponent implements OnInit {
  @Input() trueFalse;
  @Input() questionSerial;
  options = ['True', 'False'];

  constructor() { }
  ngOnInit() {
  }
}
