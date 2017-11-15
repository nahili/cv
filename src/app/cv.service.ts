import { Injectable } from '@angular/core';

import { CVS } from './data/cvs';


// CV service, returns and enrichs CV data
// Load directly from a TS file
@Injectable()
export class CvService {

  constructor() { }

  // Olds the current CV to serve
  // For the moment, that would be the first CV there is
  private cv:any = CVS[0];

  header():Promise<any> {
    return Promise.resolve(this.cv.header);
  }

  abilites():Promise<Array<any>> {
    return Promise.resolve(this.cv.abilities);
  }

  experiences():Promise<Array<any>> {
    return Promise.resolve(this.cv.experiences);
  }

  hobbies():Promise<Array<any>> {
    return Promise.resolve(this.cv.hobbies);
  }
}
