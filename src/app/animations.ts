import {animate, group, query, style, transition, trigger} from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* => *', [
      query(':enter, :leave',
        style({opacity: 1, position: 'fixed', width: '100%'}),
        {optional: true}),
      group([
        query(':enter', [
          style({opacity: '0.7', transition: 'opacity', transform: 'translateX(-30%)'}),
          animate('0.7s ease-in-out',
            style({transform: 'translateX(0%)'}))
        ], {optional: true}),
        query(':leave', [
          style({opacity: '0.5', transition: 'opacity', transform: 'translateX(0%)'}),
          animate('0.7s ease-in-out',
            style({transform: 'translateX(-30%)'}))
        ], {optional: true}),
      ])
    ]),
  ]);
