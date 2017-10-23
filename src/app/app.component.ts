import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Title } from '@angular/platform-browser';

import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable } from 'angularfire2';
import * as he from 'he';

import { ProjectService } from './project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ProjectService, Title ]
})
export class AppComponent implements OnInit {
  private projects: any;
  private subtitle: string;
  private author: string;

  constructor(
    private $http: Http,
    private $project: ProjectService,
    private $t: Title
  ) {
    this.subtitle = this.randomSubtitle();
    this.$t.setTitle(this.subtitle);
  }

  ngOnInit() {
    this.getProjects()
      .subscribe( projects => this.projects = projects );

    this.getSubtitle()
      .subscribe(quote => {
        this.subtitle = `${quote.content} - ${quote.author}`;
      });
  }

  getProjects(): FirebaseListObservable<Object[]> {
    return this.$project.getProjects();
  }

  // Button to anchor polyfill fix for anchor tag not taking Material styles
  navigateTo( url ): void {
    window.location.href = url;
  }

  getSubtitle(): Observable<Quote> {
    return this.$http.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand')
      .map(res => {
        const data = res.json()[0];

        const quote = new Quote();
        quote.author = data.title;
        quote.content = he.decode(data.content).slice(3).slice(0, -5);

        return quote;
      });
  }

  randomSubtitle() {
    let subtitles = [
      'Web Development & Donuts',
      'Microservices & Serverless',
      'Google Fanatic',
    ];

    return subtitles[Math.floor(Math.random() * subtitles.length)];
  }
}


class Quote {
  public author: string;
  public content: string;
}