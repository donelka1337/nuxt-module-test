import { isPast, isSameDay } from 'date-fns';
export const useDate = () => {
  const isFutureOrToday = (date: Date) => {
    return isPast(date) && !isSameDay(date, new Date());
  };
  return { isFutureOrToday };
};
