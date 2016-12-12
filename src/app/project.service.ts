import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ProjectService {
  private projectsRoot: FirebaseListObservable<Object[]> = this.$af.database.list('/projects');

  constructor(
    private $af: AngularFire
  ) { }

  getProjects( limitToLast: number = 8 ): FirebaseListObservable<Object[]> {
    return this.projects_({ limitToLast });
  }

  projects_( query ): FirebaseListObservable<Object[]> {
    return this.$af.database.list( '/projects', query );
  }
}
