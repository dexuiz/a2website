import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent  {
  private title:string;
  private content:string;
  private extra:string;
  private btn:string;

  constructor() {
    this.title="Hello, world!";
    this.content="This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.";
    this.extra="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    this.btn="learn more";

    }


}
