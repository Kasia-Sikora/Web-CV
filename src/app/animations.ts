import {animate, group, query, style, transition, trigger} from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* => *', [
      query(':enter, :leave',
        style({opacity: 0, position: 'absolute', height: '530px', width: 'inherit', transition: 'opacity', float: 'right'}),
        {optional: true}),
      group([
        query(':enter', [
          style({opacity: '0.8',  transform: 'translateX(-70%)'}),
          animate('0.8s ease-in-out',
            style({transform: 'translateX(0%)'}))
        ], {optional: true}),
        query(':leave', [
          style({opacity: '0.5', transition: 'opacity', transform: 'translateX(0%)'}),
          animate('0.8s ease-in-out',
            style({transform: 'translateX(-70%)'}))
        ], {optional: true}),
      ])
    ]),
  ]);

export const tabletSlideInAnimation =
  trigger('tabletAnimations', [
    transition('* => *', [
      query(':enter, :leave',
        style({opacity: 1, position: 'absolute', height: '530px', width: 'inherit'}),
        {optional: true}),
      group([
        query(':enter', [
          style({opacity: '0.8', transition: 'opacity', transform: 'translateY(-70%)'}),
          animate('0.8s ease-in-out',
            style({transform: 'translateY(0%)'}))
        ], {optional: true}),
        query(':leave', [
          style({opacity: '0', transition: 'opacity', transform: 'translateY(0%)'}),
          animate('0.8s ease-in-out',
            style({transform: 'translateY(-70%)'}))
        ], {optional: true}),
      ])
    ]),
  ]);

