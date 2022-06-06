import { HttpException, HttpStatus } from '@nestjs/common';

export class ForbiddenException extends HttpException {
  constructor() {
    super('You are forbiddened', HttpStatus.FORBIDDEN);
  }
}
