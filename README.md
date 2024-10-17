# format-tanggal-id [![npm version](https://badge.fury.io/js/format-tanggal-id.svg)](https://badge.fury.io/js/format-tanggal-id)

Formatting and retrieving date information in Bahasa Indonesia. This package provides an easy-to-use API for retrieving date information and formatting it according to Indonesian standards.

## Features

- Formats dates into a user-friendly string.
- Returns structured data with complete date information.
- Supports localization in Bahasa Indonesia.

## Installation

**npm**

```bash
npm install format-tanggal-id --save
```

### Platform compatibility

This project is compatible with **iOS**, **Android**, **Windows** and **macOS**.  
This project supports both **the old** (paper) **and the new architecture** (fabric).  
This project is compatible with [expo](https://docs.expo.dev/).

### Getting Started

If any step seems unclear, please create a pull request.

### Usage

Import the getInfoTanggal function from format-tanggal-id and use it like this:

```tsx
import {getInfoTanggal} from 'format-tanggal-id';

const dateInfo = getInfoTanggal('2024-01-01'); // Fetch information for January 1, 2024
console.log(dateInfo); // Output the date information
```

### API

```tsx
getInfoTanggal(inputTanggal: string): InfoTanggal
```

## Parameters

| Parameter    | Type   | Description                                        |
| ------------ | ------ | -------------------------------------------------- |
| inputTanggal | string | The date in **YYYY-MM-DD** format to be processed. |

### Return

An InfoTanggal object containing structured date information:

```tsx
interface InfoTanggal {
  tanggalLengkap: string;
  formatKhusus: string;
  hari: number;
  bulan: string;
  tahun: number;
  namaHari: string;
}
```

## Example Response

For the input **_'2024-01-01'_**, the output will be:

```json
{
  "tanggalLengkap": "1 Januari 2024",
  "hari": 1,
  "bulan": "Januari",
  "tahun": 2024,
  "namaHari": "Senin"
  // ...more details as your needs
}
```

## Customization Examples

You can customize how date information is displayed or processed in your application based on the returned data.

### Contributing

Feel free to contribute by adding more languages or improving the time-based logic. Follow these steps:

- Fork the repository.
- Create your feature branch (git checkout -b feature/my-feature).
- Commit your changes (git commit -am 'Add some feature').
- Push to the branch (git push origin feature/my-feature).
- Create a new Pull Request.

### License

MIT

### Translations

This readme is available in:

- [English](./README.md)

## 📝 Author

👤 **Johny Lie**

- Github: [@johnylie](https://github.com/johnylie)

## 🌱 Show your support

Please ⭐️ this repository if this project helped you!

[![](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/johnylie)
