import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  element: ElementRef;
  constructor(element: ElementRef) {
    this.element = element;
  }

  ngOnInit() {
    console.log('element', this.element);
  }

}
