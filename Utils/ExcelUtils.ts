import ExcelJS, { Workbook, Worksheet, Row, CellValue } from "exceljs";

interface Coordinates {
  row: number;
  col: number;
}

type ExcelData = CellValue[][];

async function readXl(excelpath: string): Promise<ExcelData> {
  const excel_data: ExcelData = [];

  const workbook: Workbook = new ExcelJS.Workbook();

  await workbook.xlsx.readFile(excelpath);

  const sheet: Worksheet | undefined = workbook.getWorksheet("Sheet1");

  if (!sheet) {
    throw new Error("Sheet1 not found in workbook");
  }

  sheet.eachRow((row: Row, rowNumber: number) => {
    const eachrow_data: CellValue[] = [];

    row.eachCell((cell, colNumber: number) => {
      console.log(rowNumber, colNumber, cell.value);

      eachrow_data.push(cell.value);
    });

    excel_data.push(eachrow_data);
  });

  return excel_data;
}

async function fetch_coordinates(
  excelpath: string,
  valueupdateof: string,
): Promise<Coordinates> {
  const obj_coordinate: Coordinates = {
    row: -1,
    col: -1,
  };

  const workbook: Workbook = new ExcelJS.Workbook();

  await workbook.xlsx.readFile(excelpath);

  const sheet: Worksheet | undefined = workbook.getWorksheet("Sheet1");

  if (!sheet) {
    throw new Error("Sheet1 not found in workbook");
  }

  sheet.eachRow((row: Row, rowNumber: number) => {
    row.eachCell((cell, colNumber: number) => {
      if (cell.value === valueupdateof) {
        obj_coordinate.row = rowNumber;

        obj_coordinate.col = colNumber + 2;
      }
    });
  });

  return obj_coordinate;
}

async function writeXl(
  excelpath: string,
  valtochange: string,
  valueupdateof: string,
): Promise<void> {
  const workbook: Workbook = new ExcelJS.Workbook();

  await workbook.xlsx.readFile(excelpath);

  const sheet: Worksheet | undefined = workbook.getWorksheet("Sheet1");

  if (!sheet) {
    throw new Error("Sheet1 not found in workbook");
  }

  const coordinates: Coordinates = await fetch_coordinates(
    excelpath,
    valueupdateof,
  );

  sheet.getRow(coordinates.row).getCell(coordinates.col).value = valtochange;

  await workbook.xlsx.writeFile(excelpath);
}

export { readXl, fetch_coordinates, writeXl };
