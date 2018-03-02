import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { FillInTheBlanks } from '../shared/fill-in-the-blanks/fill-in-the-blanks';
import { FillInTheBlanksComponent } from '../shared/fill-in-the-blanks/fill-in-the-blanks.component';
@Injectable()
export class StudentService {
  constructor(private http: Http) { }


  getQuestion() {
    return this.http.get('assets/question.json')
    .map((res: Response) => res.json());
  }

  setAnswer(fillInTheBlanks) {
    return this.http.post('assets/question-answer.json', JSON.stringify(fillInTheBlanks));
  }
}
