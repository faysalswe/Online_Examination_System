import { Component, OnInit, Input } from '@angular/core';
import { MultipleSelect} from './multiple-select';
@Component({
  selector: 'app-multiple-select',
  templateUrl: './multiple-select.component.html',
  styleUrls: ['./multiple-select.component.css']
})
export class MultipleSelectComponent implements OnInit {
  @Input() multipleSelect;
  @Input() questionSerial;
  option = [];
  constructor() { }

  ngOnInit() {
    this.option = [
      this.multipleSelect.option1,
      this.multipleSelect.option2,
      this.multipleSelect.option3,
      this.multipleSelect.option4];
  }
  onClick() {
    console.log(this.multipleSelect);
  }

}
