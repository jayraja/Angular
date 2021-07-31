import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styleUrls: ['./assignment-three.component.css']
})
export class AssignmentThreeComponent implements OnInit {
  toggle = false;
  

  constructor() { }

  ngOnInit(): void {
  }

  toggleVisibility(): void{
    this.toggle = !this.toggle;


  }

}
