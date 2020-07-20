import { Injectable } from '@angular/core';
import { Constants } from '../helper/constants';

@Injectable()
export class ExportService {
  exportPdf(columns: any, data: any) {
    import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then((x) => {
        const doc = new jsPDF.default(0, 0);
        doc.autoTable(columns, data);
        doc.save(`${Constants.DownLoadFileName}.pdf`);
      });
    });
  }

  exportExcel(data: any) {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(data, {
        dateNF: 'dd-MM-YYYY HH:mm:ss',
      });
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, Constants.DownLoadFileName);
    });
  }

  import() {}

  private saveAsExcelFile(buffer: any, fileName: string): void {
    import('file-saver').then((FileSaver) => {
      const EXCEL_TYPE =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      const EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE,
      });
      FileSaver.saveAs(
        data,
        fileName + '_' + new Date().getTime() + EXCEL_EXTENSION
      );
    });
  }
}
