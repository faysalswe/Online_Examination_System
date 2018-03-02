import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [StudentService]
})
export class HomeComponent implements OnInit {
  questions = [] ;
  constructor(private student: StudentService) { }

  ngOnInit() {
    this.student.getQuestion().subscribe(
      (res) => { this.questions = res;
    console.log(this.questions);
  });
  }

}
