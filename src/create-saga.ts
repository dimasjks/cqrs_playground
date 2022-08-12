import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { map, Observable } from 'rxjs';
import { CreateUserEvent } from './create-user-event';

@Injectable()
export class CreateSaga {
  @Saga()
  userCreated = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(CreateUserEvent),
      map((ev) => {
        console.log('I AM SAGA');
        return null;
      }),
    );
  };
}
