import moment from 'moment';
import {
  getInfoTanggalNow,
  getInfoTanggal,
  formatTanggalFull,
  getNamaHari,
} from '../src/api';

describe('Tanggal Indonesia', () => {
  const inputTanggal = '2024-01-01';
  const expectedInfo = {
    formatKhusus: 'tanggal 1 bulan Januari tahun 2024',
    formatKhususWithDot: 'tanggal 1 bulan Januari tahun 2024.',
    full: '1 Januari 2024',
    hari: 1,
    bulan: 'Januari',
    tahun: 2024,
    namaHari: 'Senin',
  };

  it('should return correct date information for a valid date', () => {
    expect(getInfoTanggal(inputTanggal)).toEqual(expectedInfo);
  });

  it('should throw an error for an invalid date', () => {
    const invalidTanggal = 'invalid-date';
    expect(() => getInfoTanggal(invalidTanggal)).toThrow(
      'Format tanggal tidak valid. Gunakan YYYY-MM-DD.',
    );
  });

  it('should throw an error for a date in wrong format', () => {
    const wrongFormatTanggal = '01/01/2024';
    expect(() => getInfoTanggal(wrongFormatTanggal)).toThrow(
      'Format tanggal tidak valid. Gunakan YYYY-MM-DD.',
    );
  });

  it('should return the names of the days of the week', () => {
    const expectedDays = [
      'Minggu',
      'Senin',
      'Selasa',
      'Rabu',
      'Kamis',
      'Jumat',
      'Sabtu',
    ];
    expect(getNamaHari()).toEqual(expectedDays);
  });

  it('should format date correctly', () => {
    expect(formatTanggalFull(inputTanggal)).toBe('1 Januari 2024');
  });
});

describe('getInfoTanggalNow', () => {
  it('should return current date info correctly', () => {
    const now = moment();
    const result = getInfoTanggalNow();

    expect(result.full).toBe(now.format('D MMMM YYYY'));
    expect(result.hari).toBe(now.date());
    expect(result.bulan).toBe(now.format('MMMM'));
    expect(result.tahun).toBe(now.year());
    expect(result.namaHari).toBe(now.format('dddd'));
  });
});
