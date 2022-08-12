import { AggregateRoot } from '@nestjs/cqrs';
import { CreateEventsHandler } from './create-events-handler';
import { CreateUserEvent } from './create-user-event';

export class User extends AggregateRoot {
  constructor(public name: string, public password: string) {
    super();
  }

  create(): void {
    this.apply(new CreateUserEvent(this.name, this.password));
  }
}
