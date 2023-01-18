import { Component } from '@angular/core';
import { SessionStorageService } from './service/sessionstorage.service';
import { Router } from '@angular/router';
import { EventBusService } from './service/event-bus.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  isExpanded = false;
  isLoggedIn = false;
  eventBusSub?: Subscription;

  constructor(private sessionstorageservice: SessionStorageService, private router: Router, private eventBusService: EventBusService) { }


  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

   ngOnInit() {

    console.log("------------------CALL APP COMPONENT-------------------------------");
    //this.isLoggedIn = this.sessionstorageservice.isLoggedIn();

    if (this.sessionstorageservice.isLoggedIn()) {
      this.isLoggedIn = true;
    }

    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });

  }
  logout(): void {
    this.sessionstorageservice.clearData();
    this.isLoggedIn = false;
    this.router.navigate(['login-data']);
  }
}
