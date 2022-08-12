import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { CreateUserEvent } from './create-user-event';

@EventsHandler(CreateUserEvent)
export class CreateEventsHandler implements IEventHandler<CreateUserEvent> {
  handle(event: CreateUserEvent) {
    console.log(`MyLOGGER: ${event}`);
  }
}
