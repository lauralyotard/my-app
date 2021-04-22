import { transition, trigger, query, style, animate, group } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* => *', [
      query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
      group([
        query(':enter', [
          style({ opacity: .3 }),
          animate('.4s', style({ opacity: 1 }))
        ], { optional: true }),
        query(':leave', [
          style({ opacity: 1 }),
          animate('.6s', style({ opacity: .3 }))
        ], { optional: true }),
      ])
    ])
  ]);
