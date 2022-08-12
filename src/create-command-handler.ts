import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from './create-user-command';
import { User } from './user';

@CommandHandler(CreateUserCommand)
export class CreateCommandHandler
  implements ICommandHandler<CreateUserCommand>
{
  constructor(private readonly eventPub: EventPublisher) { }

  async execute(command: CreateUserCommand) {
    const UserModel = this.eventPub.mergeClassContext(User);
    const user = new UserModel(command.name, command.password);
    console.log(`BEFORE commit: ${user}`);
    user.create();
    user.commit();
    console.log(`AFTER commit: ${user}`);
    return user;
  }
}
