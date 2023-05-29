import * as XLSX from "xlsx";

const getFileName = (name: string) => {
  let timeSpan = new Date().toISOString();
  let sheetName = name || "Family";
  let fileName = `${sheetName}-${timeSpan}`;
  return {
    sheetName,
    fileName
  };
};
export class TableUtil {
  static exportTableToExcel(tableId: string, name: string) {
    debugger;
    let { sheetName, fileName } = getFileName(name);
    let targetTableElm = document.getElementById(tableId);
    let wb = XLSX.utils.table_to_book(targetTableElm, <XLSX.Table2SheetOpts>{
      sheet: sheetName
    });
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  }

  static exportArrayToExcel(familyarray: any[], memberarray: any[], daughterarray: any[]) {
    let { sheetName, fileName } = getFileName("Family");

    var wb = XLSX.utils.book_new();
    var wsfamily = XLSX.utils.json_to_sheet(familyarray);
    wsfamily = XLSX.utils.json_to_sheet(familyarray);
    XLSX.utils.book_append_sheet(wb, wsfamily, "Family");

    var wsmember = XLSX.utils.json_to_sheet(memberarray);
    wsmember = XLSX.utils.json_to_sheet(memberarray);
    XLSX.utils.book_append_sheet(wb, wsmember, "FamilyMembers");

    var wsdaughter = XLSX.utils.json_to_sheet(daughterarray);
    wsdaughter = XLSX.utils.json_to_sheet(daughterarray);
    XLSX.utils.book_append_sheet(wb, wsdaughter, "MarriedDaughter");


    XLSX.writeFile(wb, `${fileName}.xlsx`);
  }
}
