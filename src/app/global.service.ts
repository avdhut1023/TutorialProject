import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

  constructor() { }

  globalMethod(){
    alert('inside global method');
  }
}



