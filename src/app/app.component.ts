import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angularCDK';

  constructor(private liveA: LiveAnnouncer) {

  }
  playsound() {
    this.liveA.announce('Played');
  }

  onCop(e: any) {
    console.log(e);
    console.log("Button was clicked");
    
  }
}
