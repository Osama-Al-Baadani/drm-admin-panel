import Papa from 'papaparse';

export const parseCSV = (file) => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => resolve(results.data),
      error: (error) => reject(error),
    });
  });
};

export const validateCSVHeaders = (data, requiredHeaders) => {
  if (!data || data.length === 0) return false;
  const headers = Object.keys(data[0]);
  return requiredHeaders.every((h) => headers.includes(h));
};

export default parseCSV;
