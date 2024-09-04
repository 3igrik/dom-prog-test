import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'formatter',
})
export class FormatterPipe implements PipeTransform {
  transform(value: string): string {
    return [...value].map((letter, i) => ' ' + (i % 2 === 0 ? letter.toLowerCase() : letter.toUpperCase())).join('');
  }
}
