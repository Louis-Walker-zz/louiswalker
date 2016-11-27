import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private socialProfiles: Array<Object> = [];

  constructor() {
    this.socialProfiles = [
      {
        shortName: "facebook",
        brandName: "Facebook",
        href: "facebook.com/ngserve"
      },
      {
        shortName: "twitter",
        brandName: "Twitter",
        href: "twitter.com/ng_serve"
      },
      {
        shortName: "linkedin",
        brandName: "LinkedIn",
        href: "uk.linkedin.com/in/louis-walker-0b334394"
      },
      {
        shortName: "github",
        brandName: "GitHub",
        href: "github.com/Louis-Walker"
      },
    ];
  }
}
