import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'customTimeFormat'
})

export class CustomTimeFormat implements PipeTransform {
    transform(length: number): string {
        if (typeof length === 'string') {
            length = Number(length);
        }

        if (!length || typeof length !== 'number' || length < 0) {
            console.warn('CustomTimeFormat pipe accept only numbers greater than 0')
            return String('Invalid length format');
        }

        try {
            let result: string = '';

            let hours: number = Math.floor(length / 60);
            let minutes: number = length % 60;

            if (hours) {
                result += hours + 'h';
            }

            if (hours && minutes) {
                result += ' ';
            }

            if (minutes) {
                result += minutes + 'm';
            }

            return result;
        } catch (e) {
            console.log(e);

            return String(length);
        }
    }
}
