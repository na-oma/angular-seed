import { Component } from '@angular/core';
import * as jwt from 'angular2-jwt/angular2-jwt';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent {
    constructor() {
        console.log(jwt.AuthConfig);
    }
}

