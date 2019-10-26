import {Injectable} from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router, Route
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthService} from '../../services/auth.service';
import {catchError, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private router: Router, private authService: AuthService) {
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogin ();
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogin ();
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin ();
  }

  checkLogin(): Observable<boolean> {
    return this.authService.getUser().pipe(
      map(e => {
        if (e) {
          this.router.navigate(['/dashboard']);
        } else {
          return true;
        }
      }),
      catchError((err) => {
        return of(true);
      })
    ); }
}
