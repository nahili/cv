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

  person():Promise<any> {
    let p = this.cv.person;

    // Calculate the age from the birthday
    // From https://stackoverflow.com/questions/41792026/how-do-i-calculate-age-from-birth-date-in-angular-2-using-typescript
    if (p.birthday) {
      let timeDiff = Math.abs(Date.now() - p.birthday);
      p.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    }

    // Calculate the experience from the sum of all experiences
    let total = 0;
    for (let e of this.cv.experiences)
      if (!e.doesNotCount) // Ignore experience that does not count
        total += Math.abs(e.from - e.to);
    // This calcul is to have the experience by step of 0.5
    p.experience = Math.ceil((total*2 / (1000 * 3600 * 24))/365)/2;

    return Promise.resolve(p);
  }

  diploma():Promise<any> {
    return Promise.resolve(this.cv.diploma);
  }

  contact():Promise<any> {
    return Promise.resolve(this.cv.contact);
  }

  abilities():Promise<Array<any>> {
    let abilities = this.cv.abilities;
    // Sorting the abilities by level
    abilities.sort((a, b) => {return b.level - a.level});
    return Promise.resolve(abilities);
  }

  experiences():Promise<Array<any>> {
    let experiences = this.cv.experiences;
    // Calculate the experience duration
    for (let exp of experiences) {
      // Duration in days
      let duration = Math.abs(exp.from - exp.to) / (1000 * 3600 * 24);
      // If more than a year, show the 1/2 years
      if (duration > 365) {
        exp.duration = Math.ceil((duration*2/365))/2;
        exp.duration = exp.duration + ((exp.duration > 1) ? " ans":" an");
      }
      // If more than a month, show in months
      else if (duration > 30)
        exp.duration = Math.ceil(duration/30) + " mois";
      // Else, just put in days (which is sad)
      else
        exp.duration = duration + ((duration > 1) ? " jours":" jour");
    }
    return Promise.resolve(experiences);
  }

  hobbies():Promise<Array<any>> {
    return Promise.resolve(this.cv.hobbies);
  }
}
