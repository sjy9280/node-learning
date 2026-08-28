import { PipeTransform,ArgumentMetadata } from '@nestjs/common';

export class DetailPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return value+'joanna';
  }
}