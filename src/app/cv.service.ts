import { Injectable } from '@angular/core';

import { CV } from './cv';

@Injectable()
export class CVService {
  getCV():any {
    return CV;
  }
}
