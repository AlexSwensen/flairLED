import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  buttonText = 'Rainbow';

  color: '#000000';

  convertedColor = this.hexToRgb(this.color);

  port1 = new SerialPort('/dev/cu.usbmodem1411', {
      baudRate: 19200
    });
  ngOnInit() {

  }
  buttonPressed = function() {
    this.convertedColor = this.hexToRgb(this.color);
    console.log(this.convertedColor);
    console.log(JSON.stringify(this.convertedColor));
    this.port1.write(`color ${JSON.stringify(this.convertedColor)}`);
  };


  hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

}
