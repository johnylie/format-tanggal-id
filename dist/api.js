"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTanggalDenganNamaHari = exports.formatTanggalISO = exports.formatTanggalShort = exports.formatTanggalCustom = exports.formatTanggalFull = exports.getNamaHari = exports.getInfoTanggalNow = exports.getInfoTanggal = void 0;
const moment_1 = __importDefault(require("moment"));
require("moment/locale/id");
moment_1.default.locale('id');
const getInfoTanggal = (inputTanggal) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(inputTanggal)) {
        throw new Error('Format tanggal tidak valid. Gunakan YYYY-MM-DD.');
    }
    const tanggal = (0, moment_1.default)(inputTanggal);
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
exports.getInfoTanggal = getInfoTanggal;
const getInfoTanggalNow = () => {
    const now = (0, moment_1.default)();
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
exports.getInfoTanggalNow = getInfoTanggalNow;
const getNamaHari = () => {
    return Array.from({ length: 7 }, (_, i) => (0, moment_1.default)().day(i).format('dddd'));
};
exports.getNamaHari = getNamaHari;
const formatTanggalFull = (inputTanggal) => {
    const tanggal = (0, moment_1.default)(inputTanggal);
    if (!tanggal.isValid()) {
        throw new Error('Format tanggal tidak valid. Gunakan YYYY-MM-DD.');
    }
    return tanggal.format('D MMMM YYYY');
};
exports.formatTanggalFull = formatTanggalFull;
const formatTanggalCustom = (inputTanggal, format) => {
    const tanggal = (0, moment_1.default)(inputTanggal);
    if (!tanggal.isValid()) {
        throw new Error('Format tanggal tidak valid. Gunakan YYYY-MM-DD.');
    }
    return tanggal.format(format);
};
exports.formatTanggalCustom = formatTanggalCustom;
const formatTanggalShort = (inputTanggal) => {
    const tanggal = (0, moment_1.default)(inputTanggal);
    if (!tanggal.isValid()) {
        throw new Error('Format tanggal tidak valid. Gunakan YYYY-MM-DD.');
    }
    return tanggal.format('DD/MM/YYYY');
};
exports.formatTanggalShort = formatTanggalShort;
const formatTanggalISO = (inputTanggal) => {
    const tanggal = (0, moment_1.default)(inputTanggal);
    if (!tanggal.isValid()) {
        throw new Error('Format tanggal tidak valid. Gunakan YYYY-MM-DD.');
    }
    return tanggal.format('YYYY-MM-DD');
};
exports.formatTanggalISO = formatTanggalISO;
const formatTanggalDenganNamaHari = (inputTanggal) => {
    const tanggal = (0, moment_1.default)(inputTanggal);
    if (!tanggal.isValid()) {
        throw new Error('Format tanggal tidak valid. Gunakan YYYY-MM-DD.');
    }
    return tanggal.format('dddd, D MMMM YYYY');
};
exports.formatTanggalDenganNamaHari = formatTanggalDenganNamaHari;
