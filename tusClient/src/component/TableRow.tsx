import ProgressBar from './ProgressBar';

interface FileData {
    fileName: string;
    status: number;
    fileSize: number;
  }
  

const tableData: FileData[] = [
    { fileName: "File 1", status: 75, fileSize: 1024 },
    { fileName: "File 2", status: 100, fileSize: 4096 },
    { fileName: "File 3", status: 20, fileSize: 3072 },
  ];

  const TableRow = ({fileName, status, fileSize}: FileData) => {
    return (
      <tr>
        <td className="px-2 py-2">
          <input type="checkbox" className="form-checkbox h-5 w-5" />
        </td>
        <td className="px-2 py-2">{fileName}</td>
        <td className="px-2 py-2">
         <ProgressBar status={status} />
        </td>
        <td className="px-2 py-2">{fileSize}</td>
      </tr>
    );
  };


export default TableRow