// components/TableRow.js
import React from 'react';

const TableRow = ({ item, expanded, onExpand, allChecked, onDialogOpen }) => {
  return (
    <>
      <tr className="table-row" onClick={onExpand}>
        <td>
          <input type="checkbox" checked={allChecked} onChange={(e) => e.stopPropagation()} />
        </td>
        <td>
          <h4>{item.name}</h4>
          <p className="light-text">{item.email}</p>
        </td>
        <td>
          <h4>{item.posName}</h4>
          <p className="light-text">POSP Code: {item.pospCode}</p>
        </td>
        <td>
          <h4>{item.policyType}</h4>
          <p className="light-text">Policy Number: {item.policyNumber}</p>
        </td>
        <td>
          <h4>{item.expiryDate}</h4>
          <p className="light-text">New Policy No.: {item.newPolicyNumber}</p>
        </td>
        <td>
          <span className="status">Not Renewed</span>
          <p className="light-text">Follow Up Date: {item.followUpDate}</p>
        </td>
        <td>
          <span>View More</span>
        </td>
      </tr>

      {expanded && (
        <tr className="expanded-row">
          <td colSpan="7">
            <div className="expanded-content">
              <h4>{item.name}</h4>
              <p className="light-text">{item.email}</p>
              <button className="eye-icon" onClick={onDialogOpen}>
                👁️
              </button>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default TableRow;
