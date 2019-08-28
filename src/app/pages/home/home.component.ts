import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppService} from '../../services/app.service';
import {Router, NavigationEnd, RouterEvent} from '@angular/router';
import {Subject} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy {

  public destroyed = new Subject<any>();
  constructor(private appService: AppService , private router: Router) {
  }

  getClasses() {
    const classes = {
      'pinned-sidebar': this.appService.getSidebarStat().isSidebarPinned,
      'toggeled-sidebar': this.appService.getSidebarStat().isSidebarToggeled
    };
    return classes;
  }
  toggleSidebar() {
    this.appService.toggleSidebar();
  }



  ngOnInit(): void {
    this.router.events.pipe(
        filter((event: RouterEvent) => event instanceof NavigationEnd),
        takeUntil(this.destroyed)
    ).subscribe(() => {
    });
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
}

