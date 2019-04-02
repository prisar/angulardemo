import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

export class Student{
  name: string;
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  @Input()
  ctMsg: string;

  @Input('stdLeader')
  myStdLeader: any;

  @Output('addStudentEvent')
  addStdEvent = new EventEmitter<Student>();

  @Output()
  sendMsgEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
