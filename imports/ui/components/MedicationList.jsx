import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_MEDICATIONS = gql`
  query GetMedications {
    medications {
      _id
      name
      genericName
      quantity
      reorderLevel
      expiryDate
      category
    }
  }
`;

const MedicationList = () => {
  const { loading, error, data } = useQuery(GET_MEDICATIONS);

  if (loading) return <p>Loading medications...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Medication Inventory</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Generic Name</th>
            <th>Quantity</th>
            <th>Reorder Level</th>
            <th>Expiry Date</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.medications.map(med => (
            <tr key={med._id} className={med.quantity <= med.reorderLevel ? 'low-stock' : ''}>
              <td>{med.name}</td>
              <td>{med.genericName || '-'}</td>
              <td>{med.quantity}</td>
              <td>{med.reorderLevel || 'Not Set'}</td>
              <td>{med.expiryDate ? new Date(med.expiryDate).toLocaleDateString() : '-'}</td>
              <td>{med.category || '-'}</td>
              <td>
                {med.quantity <= med.reorderLevel ? '⚠️ Low Stock' : '✓ In Stock'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicationList;