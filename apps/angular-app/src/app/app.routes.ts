import { Route } from '@angular/router';
import { AngularCounterComponent } from './components/counter/angular-counter.component';

export const appRoutes: Route[] = [{
    path: "counter",
    component: AngularCounterComponent
}];
