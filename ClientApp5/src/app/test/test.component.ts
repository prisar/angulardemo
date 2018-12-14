import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "angulardemo";
  public location = window.location.href;
  public textId = "textId";
  public succesClass = "text-success";

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return "Hello" + this.name;
  }
}
