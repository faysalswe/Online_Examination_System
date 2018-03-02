import { Component, OnInit, Input } from '@angular/core';
import { FillInTheBlanks } from './fill-in-the-blanks';
import { Validators, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { StudentService } from '../../student/student.service';

@Component({
  selector: 'app-fill-in-the-blanks',
  templateUrl: './fill-in-the-blanks.component.html',
  styleUrls: ['./fill-in-the-blanks.component.css']
})
export class FillInTheBlanksComponent implements OnInit {
  @Input() fillInTheBlanks: FillInTheBlanks;
  @Input() questionSerial;
  questionArrary = [];

  constructor(private student: StudentService) { }
  form = new FormGroup({
    answers: new FormArray([
    ]),
  });

  ngOnInit() {
    this.questionArrary = this.fillInTheBlanks.question.split('--');
    for (let index = 0; index < this.questionArrary.length; index++) {
       this.add();
    }
  }

  get answers(): FormArray { return this.form.get('answers') as FormArray; }

  add() { this.answers.push(new FormControl()); }

  onSubmit() {
  this.fillInTheBlanks.answers = this.answers.value.slice(0, (this.answers.length - 1));
    this.student.setAnswer(this.fillInTheBlanks).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

}
