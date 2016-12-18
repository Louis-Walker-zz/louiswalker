import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ProjectService {
  constructor(
    private $af: AngularFire
  ) { }

  private projects_( query ): FirebaseListObservable<Object[]> {
    return this.$af.database.list( '/projects', query );
  }

  public getProjects( limitToLast: number = 8 ): FirebaseListObservable<Object[]> {
    return this.projects_({ limitToLast });
  }
}
