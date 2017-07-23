import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text: string;

  @Output() clicked: EventEmitter<string> = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
  }

  click() {
    this.clicked.emit();
    console.log('clicked');

  }

}
