import { Get, Controller } from '@nestjs/common';

@Controller()
export class LabelsController {
	@Get()
	root(): string {
    return 'Hello World!';
  }
}
