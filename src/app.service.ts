import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { CreateUserCommand } from './create-user-command';

@Injectable()
export class AppService {
  constructor(private readonly cmdBus: CommandBus) { }

  async cqrs() {
    return this.cmdBus.execute(new CreateUserCommand('admin', 'secret'));
  }
}
