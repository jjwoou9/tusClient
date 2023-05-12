import React, { useState } from 'react';
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

const Upload = () => {
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const [selectAll, setSelectAll] = useState(false);
    const fileList = tableData;

    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
          setSelectedRows(tableData.map((_, i) => i));
          setSelectAll(true);
        } else {
          setSelectedRows([]);
          setSelectAll(false);
        }
    };

    const handleSelectRow = (e: React.ChangeEvent<HTMLInputElement>, rowIndex: number) => {
        if (e.target.checked) {
          setSelectedRows((prevSelectedRows) => [...prevSelectedRows, rowIndex]);
        } else {
          setSelectedRows((prevSelectedRows) => prevSelectedRows.filter((r) => r !== rowIndex));
        }
    };


  return (
    <>
        <h2 className='text-left text-lg ml-4 mb-5'>Upload </h2>
        <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead>
            <tr>
                <th className="border border-gray-400 px-2 py-2 w-1/9">
                <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                    className="mr-2 leading-tight"
                />
                </th>
                <th className="border border-gray-400 px-4 py-2">File Name</th>
                <th className="border border-gray-400 px-4 py-2">Status</th>
                <th className="border border-gray-400 px-4 py-2">File Size</th>
            </tr>
            </thead>
            <tbody>
                  {fileList.map((file,idx) => (
                    <TableRow fileName={file.fileName} status={file.status} fileSize={file.fileSize} />
                ))}
                {fileList.length === 0 && (
                  <tr>
                    <td colSpan={4} className="text-center py-4">
                      There are no files to display.
                    </td>
                  </tr>
                )}
              </tbody>
        </table>
        <div className="mt-4 flex justify-between">
            <div>
            <button className="px-4 py-2 bg-gray-400 text-white rounded-lg mr-4">선택항목 제거</button>
            <button className="px-4 py-2 bg-gray-400 text-white rounded-lg">초기화</button>
            </div>
            <div>
            <button className="px-4 py-2 bg-gray-400 text-white rounded-lg mr-4">파일 저장</button>
            <button className="px-4 py-2 bg-gray-400 text-white rounded-lg">파일 추가</button>
            </div>
        </div>
        </div>
    </>
  )
}

export default Upload