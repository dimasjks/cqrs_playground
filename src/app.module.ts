import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateCommandHandler } from './create-command-handler';
import { CreateEventsHandler } from './create-events-handler';
import { CreateSaga } from './create-saga';

@Module({
  imports: [CqrsModule],
  controllers: [AppController],
  providers: [
    AppService,
    CreateCommandHandler,
    CreateEventsHandler,
    CreateSaga,
  ],
})
export class AppModule { }
