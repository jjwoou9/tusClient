import React from 'react';
import ProgressBar from './ProgressBar';

interface File {
  id: number;
  name: string;
  status: number;
  size: number;
}

interface Props {
  files: File[];
}

const Table: React.FC<Props> = ({ files }) => {
  return (
    <div className="my-4">
      <table className="table-fixed w-full">
        <thead>
          <tr>
            <th className="w-8"></th>
            <th className="w-2/5">File Name</th>
            <th className="w-2/5">Status</th>
            <th className="w-1/5">File Size</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file) => (
            <tr key={file.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{file.name}</td>
              <td>
                <ProgressBar progress={file.status} />
              </td>
              <td>{file.size} KB</td>
            </tr>
          ))}
          {files.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center py-4">
                There are no files to display.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="flex justify-between my-4">
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Select
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
            Reset
          </button>
        </div>
        <div>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Upload
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ml-4">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
