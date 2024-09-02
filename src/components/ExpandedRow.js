// ExpandedRow.js
import React from 'react';
import './ExpandedRow.css'; // Assume we have a separate CSS for expanded row styling

const ExpandedRow = ({ rowData, onDialogOpen }) => {
  return (
    <tr className="expanded-row">
      <td colSpan="6">
        <table className="expanded-inner-table">
          <tbody>
            <tr>
              <td>
                <h5>+91 982738928</h5>
                <p className="light-text">Customer No.</p>
              </td>
              <td>
                <h5>Sarah Davis</h5>
                <p className="light-text">RM Name</p>
              </td>
              <td>
                <h5>ICICI Lombard</h5>
                <p className="light-text">Issuing Company</p>
              </td>
              <td>
                <h5>Remarks</h5>
                <p className="light-text">NA</p>
              </td>
              <td>
                <h5>Register No.: 001718</h5>
                <p className="light-text">
                  Payment Link: <a href="https://url.com">https://url.com</a>
                </p>
              </td>
              <td>
                <h5 className="eye-icon" onClick={onDialogOpen}>👁️ View</h5>
                <p className="light-text">Renewal Letter</p>
              </td>
            </tr>
            <tr>
              <td colSpan="6" className="extra-info-container">
                <div className="extra-info">
                  <div className="extra-item" onClick={() => onDialogOpen({ title: 'Policy Details' })}>
                    <h5>👁️ open</h5>
                    <p className="light-text">Policy Details</p>
                  </div>
                  <div className="extra-item" onClick={() => onDialogOpen({ title: 'IC & Customer Details' })}>
                    <h5>👁️ open</h5>
                    <p className="light-text">IC & Customer Details</p>
                  </div>
                  <div className="extra-item" onClick={() => onDialogOpen({ title: 'Premium Details' })}>
                    <h5>👁️ open</h5>
                    <p className="light-text">Premium Details</p>
                  </div>
                  <div className="extra-item" onClick={() => onDialogOpen({ title: 'Vehicle Details' })}>
                    <h5>👁️ open</h5>
                    <p className="light-text">Vehicle Details</p>
                  </div>
                  <div className="extra-item" onClick={() => onDialogOpen({ title: 'POSP Details' })}>
                    <h5>👁️ open</h5>
                    <p className="light-text">POSP Details</p>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
};

export default ExpandedRow;
