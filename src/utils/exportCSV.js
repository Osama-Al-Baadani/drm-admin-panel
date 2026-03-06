import Papa from 'papaparse';

export const exportCSV = (data, filename = 'export.csv') => {
  const csv = Papa.unparse(data);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href     = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
};

export const formatDataForExport = (data, columns) =>
  data.map((row) =>
    columns.reduce((acc, col) => {
      acc[col.label] = col.format ? col.format(row[col.key]) : row[col.key];
      return acc;
    }, {})
  );

export default exportCSV;
