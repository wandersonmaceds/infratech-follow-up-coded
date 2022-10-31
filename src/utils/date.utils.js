import { format } from 'date-fns';

export function getCurrentDateFormatted() {
    return format(new Date(), 'yyyy-MM-dd');
}