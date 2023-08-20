import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HousingService } from 'src/app/services/housing.service';
import { IPropertyBase } from 'src/app/model/ipropertyBase';
import { Property } from 'src/app/model/property';

export const RouteResolver: ResolveFn<any> = ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot,
  housingService: HousingService = inject(HousingService)): Observable<Property> | any=>
  {
    // const Id = +route.params['id'];
    // return housingService.getProperty(Id);
    const Id = +route.params['id'];
     housingService.getProperty(Id).pipe(
      catchError((err) => {
        return of('No data' + err);
      })
    );
  }
    

    