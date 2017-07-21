import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  buttonText = 'Hello';

  ngOnInit() {
    SerialPort.list(function (err, ports) {
      ports.forEach(function (port) {
        // console.log('port', port);
      });

    });
  }
}
