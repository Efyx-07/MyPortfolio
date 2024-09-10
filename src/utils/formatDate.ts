import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

// format the date
export default function formatDate(date: Date): string {
  return format(date, 'd MMMM yyyy', { locale: fr });
}
