// components/Table.js
import React, { useState } from 'react';
import './Table.css';
import Dialog from './Dialog';
import data from '../data/data.js'; // Assuming JSON data is stored in this path
import ExpandedRow from './ExpandedRow.js';

const Table = () => {
  const [expandedRows, setExpandedRows] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [filters, setFilters] = useState({ policyType: '', expiryDate: '' });
  const [filteredData, setFilteredData] = useState(data);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const toggleRow = (index) => {
    if (expandedRows.includes(index)) {
      setExpandedRows(expandedRows.filter(row => row !== index));
    } else {
      setExpandedRows([...expandedRows, index]);
    }
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(filteredData.map((_, index) => index)); // Select all row indices
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter(row => row !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const toggleDialog = () => {
    setDialogVisible(!dialogVisible);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + rowsPerPage);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const applyFilters = () => {
    const { policyType, expiryDate } = filters;
    const filtered = data.filter(item =>
      (!policyType || item.policyType.toLowerCase().includes(policyType.toLowerCase())) &&
      (!expiryDate || item.expiryDate.includes(expiryDate))
    );
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to the first page when filters are applied
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value));
    setCurrentPage(1); // Reset to the first page when rows per page is changed
  };

  return (
    <div className="table-container">
      <div className="filter-container">
        <input
          type="text"
          name="policyType"
          placeholder="Filter by Policy Type"
          value={filters.policyType}
          onChange={handleFilterChange}
        />
        <input
          type="date"
          name="expiryDate"
          placeholder="Filter by Expiry Date"
          value={filters.expiryDate}
          onChange={handleFilterChange}
        />
        <button onClick={applyFilters}>Search</button>
      </div>

      <table className="policy-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={selectedRows.length === filteredData.length}
                style={{ transform: 'scale(1.5)' }} // Make checkbox bigger
              />
            </th>
            <th>Name</th>
            <th>POS Name</th>
            <th>Policy Type</th>
            <th>Expiry Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <React.Fragment key={index}>
              <tr onClick={() => toggleRow(index)} className={expandedRows.includes(index) ? 'expanded' : ''}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(index)}
                    onChange={() => handleSelectRow(index)}
                    onClick={(e) => e.stopPropagation()} // Prevent row expansion when clicking the checkbox
                    style={{ transform: 'scale(1.5)' }} // Make checkbox bigger
                  />
                </td>
                <td>
                  <h5>{item.name}</h5>
                  <p className="light-text">{item.email}</p>
                </td>
                <td>
                  <h5>{item.posName}</h5>
                  <p className="light-text">{item.pospCode}</p>
                </td>
                <td>
                  <span className={`policy-type ${item.policyType === 'Motor' ? 'motor' : ''}`}>
                    {item.policyType}
                  </span>
                  <p className="light-text">{item.policyNumber}</p>
                </td>
                <td>
                  <h5>{item.expiryDate}</h5>
                  <p className="light-text">{item.newPolicyNumber}</p>
                </td>
                <td>
                  <span className={`status ${item.status === 'Not Renewed' ? 'not-renewed' : 'renewed'}`}>
                    {item.status}
                  </span>
                  <p className="light-text">{item.followUpDate}</p>
                </td>
              </tr>

              {expandedRows.includes(index) && (
                <>
                  <ExpandedRow
                    rowData={item}
                    onDialogOpen={toggleDialog}
                  />
                </>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      <div className="table-footer">
        <div className="rows-per-page">
          <label>Rows per page: </label>
          <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>
        <div className="pagination">
          <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
      </div>

      <Dialog visible={dialogVisible} onClose={toggleDialog}>
        <p>Dialog Content Here</p>
      </Dialog>
    </div>
  );
};

export default Table;
