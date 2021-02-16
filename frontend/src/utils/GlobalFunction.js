import dayjs from 'dayjs';

export const formatThb = (number) => {
  // Create our number formatter.
  const formatter = new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 2, // (causes 2500.99 to be printed as $2,501)
  });

  return formatter.format(number);
};

// formatter.format(2500); /* $2,500.00 */

// // dayjs.tz.guess();
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

// JSON 2 Form Data
export const JSONtoFormData = (json) => {
  const formData = new FormData();
  for (const key in json) {
    formData.append(key, json[key]);
  }

  return formData;
};
