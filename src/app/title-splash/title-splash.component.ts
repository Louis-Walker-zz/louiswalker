import { Component, OnInit, Input } from '@angular/core';

class SocialProfile {
  shortName: string;
  brandName: string;
  href: string;
}

@Component({
  selector: 'lw-title-splash',
  templateUrl: './title-splash.component.html',
  styleUrls: ['./title-splash.component.css']
})
export class TitleSplashComponent implements OnInit {
  private socialProfiles: Array<SocialProfile> = [];

  @Input() subtitle: string = 'Web Development and Donuts';

  constructor() {
  }

  ngOnInit() {
    this.socialProfiles = [
      {
        shortName: 'facebook',
        brandName: 'Facebook',
        href: 'facebook.com/ngserve'
      },
      {
        shortName: 'twitter',
        brandName: 'Twitter',
        href: 'twitter.com/ng_serve'
      },
      {
        shortName: 'linkedin',
        brandName: 'LinkedIn',
        href: 'uk.linkedin.com/in/louis-walker-0b334394'
      },
      {
        shortName: 'github',
        brandName: 'GitHub',
        href: 'github.com/Louis-Walker'
      },
    ];
  }

}
