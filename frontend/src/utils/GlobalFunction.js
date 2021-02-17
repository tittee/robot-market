import dayjs from 'dayjs';

export const formatThb = (number) => {
  // Create our number formatter.
  const formatter = new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  return formatter.format(number);
};

const today = new Date();
const getTimezoneOffset =
  today.getTimezoneOffset() <= 1
    ? (today.getTimezoneOffset() / 60) * -1
    : today.getTimezoneOffset() / 60;

export const formatDate = (dateString) => {
  return dayjs(dateString).add(getTimezoneOffset, 'hour').format('DD/MM/YYYY');
};

export const formatDateWithMonthName = (dateString) => {
  return dayjs(dateString).add(getTimezoneOffset, 'hour').format('DD MMM YY');
};

export const formatDateTime = (dateString) => {
  return dayjs(dateString).add(getTimezoneOffset, 'hour').format('DD/MM/YYYY, HH:mm');
};
