// RatingCompany.jsx
import React from 'react';
import StarRating from './StarRating';

const RatingCompany = ({ companies, handleRating }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Calificación</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {companies.map((company) => (
            <tr key={company.id}>
              <td className="px-6 py-4 whitespace-nowrap">{company.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <StarRating
                  rating={company.rating}
                  onRating={(rating) => handleRating(company.id, rating)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RatingCompany;