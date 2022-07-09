import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  title: string = "Hello World, My name is Aston Cook";
  introduction: string = "I have a bachelor's degree in software engineering and about 1 year in professional experience."+
  "I currently work as a QA automation engineer at Kestra Financial.";

  ngOnInit() {}

}
