import React from 'react'

interface FileData {
    fileName: string;
    status: string;
    fileSize: number;
  }
  
  const tableData: FileData[] = [
    { fileName: "File 1", status: "Completed", fileSize: 1024 },
    { fileName: "File 2", status: "Pending", fileSize: 2048 },
    { fileName: "File 3", status: "Failed", fileSize: 3072 },
  ];

function Table() {
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const [selectAll, setSelectAll] = useState(false);

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
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="border border-gray-400 px-4 py-2">
                        <input
                            type="checkbox"
                            checked={selectAll}
                            onChange={handleSelectAll}
                            className="mr-2 leading-tight"
                        />
                        Select All
                        </th>
                        <th className="border border-gray-400 px-4 py-2">File Name</th>
                        <th className="border border-gray-400 px-4 py-2">Status</th>
                        <th className="border border-gray-400 px-4 py-2">File Size</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-2 py- font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-4">
                            Silver
                        </td>
                        <td className="px-6 py-4">
                            Laptop
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Microsoft Surface Pro
                        </th>
                        <td className="px-6 py-4">  
                            White
                        </td>
                        <td className="px-6 py-4">
                            Laptop PC
                        </td>
                        <td className="px-6 py-4">
                            $1999
                        </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Magic Mouse 2
                        </th>
                        <td className="px-6 py-4">
                            Black
                        </td>
                        <td className="px-6 py-4">
                            Accessories
                        </td>
                        <td className="px-6 py-4">
                            $99
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
      )
    }
    
    export default Table