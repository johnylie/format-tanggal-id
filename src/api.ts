import moment from 'moment';
import 'moment/locale/id';
import {InfoTanggal} from './types';

moment.locale('id');

export const getInfoTanggal = (inputTanggal: string): InfoTanggal => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(inputTanggal)) {
    throw new Error('Format tanggal tidak valid. Gunakan YYYY-MM-DD.');
  }

  const tanggal = moment(inputTanggal);

  if (!tanggal.isValid()) {
    throw new Error('Format tanggal tidak valid. Gunakan YYYY-MM-DD.');
  }

  return {
    formatKhusus: `tanggal ${tanggal.date()} bulan ${tanggal.format('MMMM')} tahun ${tanggal.year()}`,
    formatKhususWithDot: `tanggal ${tanggal.date()} bulan ${tanggal.format('MMMM')} tahun ${tanggal.year()}.`,
    full: tanggal.format('D MMMM YYYY'),
    hari: tanggal.date(),
    bulan: tanggal.format('MMMM'),
    tahun: tanggal.year(),
    namaHari: tanggal.format('dddd'),
  };
};

export const getInfoTanggalNow = (): InfoTanggal => {
  const now = moment();
  return {
    formatKhusus: `tanggal ${now.date()} bulan ${now.format('MMMM')} tahun ${now.year()}`,
    formatKhususWithDot: `tanggal ${now.date()} bulan ${now.format('MMMM')} tahun ${now.year()}`,
    full: now.format('D MMMM YYYY'),
    hari: now.date(),
    bulan: now.format('MMMM'),
    tahun: now.year(),
    namaHari: now.format('dddd'),
  };
};

export const getNamaHari = (): string[] => {
  return Array.from({length: 7}, (_, i) => moment().day(i).format('dddd'));
};

export const formatTanggalFull = (inputTanggal: string): string => {
  const tanggal = moment(inputTanggal);
  if (!tanggal.isValid()) {
    throw new Error('Format tanggal tidak valid. Gunakan YYYY-MM-DD.');
  }
  return tanggal.format('D MMMM YYYY');
};

export const formatTanggalCustom = (
  inputTanggal: string,
  format: string,
): string => {
  const tanggal = moment(inputTanggal);
  if (!tanggal.isValid()) {
    throw new Error('Format tanggal tidak valid. Gunakan YYYY-MM-DD.');
  }
  return tanggal.format(format);
};

export const formatTanggalShort = (inputTanggal: string): string => {
  const tanggal = moment(inputTanggal);
  if (!tanggal.isValid()) {
    throw new Error('Format tanggal tidak valid. Gunakan YYYY-MM-DD.');
  }
  return tanggal.format('DD/MM/YYYY');
};

export const formatTanggalISO = (inputTanggal: string): string => {
  const tanggal = moment(inputTanggal);
  if (!tanggal.isValid()) {
    throw new Error('Format tanggal tidak valid. Gunakan YYYY-MM-DD.');
  }
  return tanggal.format('YYYY-MM-DD');
};

export const formatTanggalDenganNamaHari = (inputTanggal: string): string => {
  const tanggal = moment(inputTanggal);
  if (!tanggal.isValid()) {
    throw new Error('Format tanggal tidak valid. Gunakan YYYY-MM-DD.');
  }
  return tanggal.format('dddd, D MMMM YYYY');
};
