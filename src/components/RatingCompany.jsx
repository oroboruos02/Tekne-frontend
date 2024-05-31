// RatingCompany.jsx
import React, { useEffect, useState } from 'react';
import StarRating from './StarRating';

const RatingCompany = ({ companies, handleRating }) => {

  const [clientId, setclientId] = useState(null)

  useEffect(() => {
    const user = localStorage.getItem('user')
    if(user){
      const parseUser = JSON.parse(user)
      setclientId(parseUser.userId)
    }
  },[])

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
                <StarRating company={company.id} client={clientId}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RatingCompany;