// logger.service.ts

import { Injectable } from '@nestjs/common';
import * as winston from 'winston';
import { Logger, format, transports } from 'winston';

@Injectable()
export class LoggerService {
  private readonly logger: Logger;

  constructor() {
    this.logger = winston.createLogger({
      level: 'info',
      transports: [
        new transports.File({
          filename: 'logs/request.log',
          level: 'info',
          format: format.combine(format.timestamp(), format.json()),
        }),
      ],
    });
  }

  log(message: string, context?: string) {
    this.logger.log('info', message, { context });
  }

  error(message: string, trace: string, context?: string) {
    this.logger.error(message, { context, trace });
  }

  warn(message: string, context?: string) {
    this.logger.warn(message, { context });
  }

  debug(message: string, context?: string) {
    this.logger.debug(message, { context });
  }

  verbose(message: string, context?: string) {
    this.logger.verbose(message, { context });
  }
}
