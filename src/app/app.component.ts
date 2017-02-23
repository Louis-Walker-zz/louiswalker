import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ProjectService } from './project.service';

import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ProjectService, Title ]
})
export class AppComponent implements OnInit {
  private projects: any;
  private subtitle: string;

  constructor(
    private $project: ProjectService,
    private $t: Title
  ) {
    this.subtitle = this.randomSubtitle();
    this.$t.setTitle(this.subtitle);
  }

  ngOnInit() {
    this.getProjects()
      .subscribe( projects => this.projects = projects );
  }

  getProjects(): FirebaseListObservable<Object[]> {
    return this.$project.getProjects();
  }

  // Button to anchor polyfill fix for anchor tag not taking Material styles
  navigateTo( url ): void {
    window.location.href = url;
  }

  randomSubtitle() {
    let subtitles = [
      'Web Development & Donuts',
      'Microservices & Serverless',
      'Walk & Develop',
      'Google Fanatic',
      'Single Page Applications'
    ];

    return subtitles[Math.floor(Math.random() * subtitles.length)];
  }
}
