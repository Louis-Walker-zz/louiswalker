import { Component, OnInit } from '@angular/core';

import { ProjectService } from './project.service';

import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ProjectService ]
})
export class AppComponent implements OnInit {
  private socialProfiles: Array<Object> = [];
  private projects: any;

  constructor(
    private $p: ProjectService
  ) {
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

  ngOnInit() {
    this.getProjects()
      .subscribe( projects => this.projects = projects );
  }

  getProjects(): FirebaseListObservable<Object[]> {
    return this.$p.getProjects();
  }
}
