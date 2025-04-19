import React, { useState } from 'react';

const Nform = () => {
  const [formData, setFormData] = useState({
    nomineeName: '',
    nomineeEmail: '',
    nomineePhone: '',
    nomineeGender: '',
    nomineeBio: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'radio') {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Handle form submission logic here (e.g., send data to API)
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <main className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-6">Nominee Form</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="nomineeName" className="block text-sm font-medium text-gray-700">Name*</label>
              <input
                type="text"
                id="nomineeName"
                name="nomineeName"
                value={formData.nomineeName}
                onChange={handleChange}
                placeholder="Enter nominee's name"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="nomineeEmail" className="block text-sm font-medium text-gray-700">Email*</label>
              <input
                type="email"
                id="nomineeEmail"
                name="nomineeEmail"
                value={formData.nomineeEmail}
                onChange={handleChange}
                placeholder="Enter nominee's email"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="nomineePhone" className="block text-sm font-medium text-gray-700">Phone*</label>
              <input
                type="tel"
                id="nomineePhone"
                name="nomineePhone"
                value={formData.nomineePhone}
                onChange={handleChange}
                placeholder="Enter nominee's phone number"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Gender*</label>
              <div className="space-y-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    id="nomineeGenderMale"
                    name="nomineeGender"
                    value="Male"
                    checked={formData.nomineeGender === 'Male'}
                    onChange={handleChange}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">Male</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    id="nomineeGenderFemale"
                    name="nomineeGender"
                    value="Female"
                    checked={formData.nomineeGender === 'Female'}
                    onChange={handleChange}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">Female</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    id="nomineeGenderNonBinary"
                    name="nomineeGender"
                    value="Non-binary"
                    checked={formData.nomineeGender === 'Non-binary'}
                    onChange={handleChange}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">Non-binary</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    id="nomineeGenderOther"
                    name="nomineeGender"
                    value="Other"
                    checked={formData.nomineeGender === 'Other'}
                    onChange={handleChange}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">Other</span>
                </label>
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="nomineeBio" className="block text-sm font-medium text-gray-700">Brief biography*</label>
              <textarea
                id="nomineeBio"
                name="nomineeBio"
                value={formData.nomineeBio}
                onChange={handleChange}
                placeholder="Answer here"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 h-32"
                required
              />
            </div>
          </div>

          {/* Submit button */}
          <div>
            <button
              type="submit"
              className="bg-blue-800 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700"
            >
              Submit Nomination
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Nform;
