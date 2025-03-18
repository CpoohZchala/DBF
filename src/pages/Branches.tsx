import React, { useState } from "react";
import branchData from "../data/branches.json"; // Adjust the path if necessary

interface Branch {
  id: number;
  name: string;
  address: string;
  tel: string;
  manager: string;
  lat: number;
  lng: number;
}

const BranchList: React.FC = () => {
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  // Convert JSON id to a number (if stored as a string)
  const branches: Branch[] = branchData.map(branch => ({
    ...branch,
    id: Number(branch.id), // Ensure id is a number
    manager: branch.Manager || "", // Fix inconsistent key name
  }));

  const letters = [...new Set(branches.map(branch => branch.name[0]))];

  const filteredBranches = selectedLetter
    ? branches.filter(branch => branch.name.startsWith(selectedLetter))
    : branches;

  return (
    <>
      {/* Header Section with Image */}
      <section className="mt-15 w-full flex justify-center bg-white py-10">
        <img
          src="https://computerrepairskidderminster.com/wp-content/uploads/2021/06/banner-image-v2.5-e15421711612851.jpg"
          alt="Contact Us Banner"
          className="w-full max-h-[300px] object-cover"
        />
      </section>


      <div className="mt-2 justify-center p-6">
        <h2 className="text-5xl font-bold text-gray-800">
          <span className="text-blue-600">Branch</span> Network
        </h2>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap  gap-2">
          <button
            className="bg-blue-700 text-white px-6 py-2 min-w-[50px] rounded transition"
            onClick={() => setSelectedLetter(null)}
          >
            All
          </button>
        {letters.map(letter => (
          <button
            key={letter}
            className={`px-4 py-2 rounded transition ${selectedLetter === letter ? "bg-black text-white" : "bg-gray-200"
              }`}
            onClick={() => setSelectedLetter(letter)}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Branch List */}
      <div className="mt-7 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBranches.map(branch => (
          <div key={branch.id} className="p-4 border rounded shadow-md">
            <h3 className="text-blue-600 text-xl font-bold">{branch.name}</h3>
            <p className="text-gray-600">{branch.address || "N/A"}</p>
            <p>
              <strong>Tel:</strong> {branch.tel || "N/A"}
            </p>
            <p>
              <strong>Manager:</strong> {branch.manager || "N/A"}
            </p>
            <p className="text-blue-500 mt-2">Open weekdays 8:30 a.m. to 5:00 p.m.</p>
            <p className="text-blue-500">Open on Saturdays 8:30 a.m. to 1:00 p.m.</p>
          </div>
        ))}
      </div>
    </div ></>

  );
};

export default BranchList;
