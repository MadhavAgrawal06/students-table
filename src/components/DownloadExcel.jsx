import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

function DownloadExcel({ data }) {

  const download = () => {

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array"
    });

    const blob = new Blob([excelBuffer], {
      type:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"
    });

    saveAs(blob, "students.xlsx");
  };

  return (
    <button className="btn btn-success btn-sm" onClick={download}>
      Download Excel
    </button>
  );
}

export default DownloadExcel;