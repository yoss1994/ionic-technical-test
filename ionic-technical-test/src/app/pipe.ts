import { Pipe } from '@angular/core';

@Pipe({
  name: 'limitTo'
})

    /*******************Pipe that will truncate the posts body with the chosen limit  *****************************/

export class TruncatePipe {
  transform(value: string, args: string) : string {
    let limit = args ? parseInt(args, 10) : 10;
    let trail = '...';
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}