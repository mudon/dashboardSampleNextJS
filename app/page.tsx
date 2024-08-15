"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles/contentWrapper.css'; 
import { useState } from 'react';

export default function Home() {
  // Data and state
  const data = [
    { name: "example1", id: "exampleId1", email: "exampleEmail1" },
    { name: "example2", id: "exampleId2", email: "exampleEmail2" },
    { name: "example3", id: "exampleId3", email: "exampleEmail3" },
    { name: "example4", id: "exampleId4", email: "exampleEmail4" },
    { name: "example5", id: "exampleId5", email: "exampleEmail5" },
    { name: "example6", id: "exampleId6", email: "exampleEmail6" },
    { name: "example7", id: "exampleId7", email: "exampleEmail7" },
  ];

  const [currentPage, setCurrentPage] = useState<number>(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const numPage = Math.ceil(data.length / recordsPerPage);
  const numbers = Array.from({ length: numPage }, (_, i) => i + 1);

  const changeCPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= numPage) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <div className="flex items-center">
        <button className="bg-blue-500 text-white p-2 rounded ml-auto">
          LOG OUT
        </button>
      </div>
      <div className="p-2 mt-9 borderDashboard">Pentadbiran/ Pengguna</div>
      <div className="h-screen mt-3 pt-20 pl-5 pr-5 borderDashboard">
        <div className="text-2xl font-bold mb-10">SENARAI PENGGUNA MYGEOSERVE</div>
        <button className="text-black border border-blue-700 pt-1 pb-1 pl-7 pr-7 rounded ml-auto">
          Tambah
        </button>
        <div>
          <table className="table-auto w-full border-collapse border border-gray-200 mt-10">
          <thead className="bg-custom-green">
              <tr>
                <th className="border border-gray-300 px-4 py-2">ID</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
              </tr>
            </thead>
            <tbody>
              {records.map((user, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <nav className="mt-3">
            <ul className="pagination">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => changeCPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
              </li>
              {numbers.map((n) => (
                <li
                  className={`page-item ${currentPage === n ? 'active' : ''}`}
                  key={n}
                >
                  <button
                    className="page-link"
                    onClick={() => changeCPage(n)}
                  >
                    {n}
                  </button>
                </li>
              ))}
              <li
                className={`page-item ${
                  currentPage === numPage ? 'disabled' : ''
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => changeCPage(currentPage + 1)}
                  disabled={currentPage === numPage}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
