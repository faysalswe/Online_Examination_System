import { Component, OnInit, Input } from '@angular/core';
import { MultipleChoice } from './multiple-choice';
@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css']
})
export class MultipleChoiceComponent implements OnInit {
  @Input() multipleChoice;
  @Input() questionSerial;
  options = [];
  answer;
  constructor() { }

  ngOnInit() {
    this.options = [
      this.multipleChoice.option1,
      this.multipleChoice.option2,
      this.multipleChoice.option3,
      this.multipleChoice.option4
    ];
  }

  onClick() {
    console.log(this.answer);
  }
}
