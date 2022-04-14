import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './events/create-user.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('handleUserCreated event handled in communication service');
    console.log(
      'an user_created event received at communication-service',
      data,
    );
  }
}
