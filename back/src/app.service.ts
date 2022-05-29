import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  authenticate(): string {
    return 'Authenticated';
  }
}
