import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-two',
  templateUrl: './assignment-two.component.html',
  styleUrls: ['./assignment-two.component.css']
})
export class AssignmentTwoComponent implements OnInit {
  username = 'test';
  constructor() { }

  ngOnInit(): void {
  }

  onResetUsername():void{
    this.username = '';
  }
}
