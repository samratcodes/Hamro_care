import React, { useState } from 'react';
import { MdHealthAndSafety } from "react-icons/md";

const Checkups = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);

  const categories = [
    {
      name: 'Checkups',
      subcategories: [
        { title: 'Monthly Checkup', description: 'Monitoring of parameters such as blood glucose levels and symptom progression.', cost: 800 },
        { title: 'Physician', description: 'Checkup for some common illness such as cold, fever and headache.', cost: 400 },
        { title: 'Regular Checkup', description: 'Measurements of vital signs such as blood pressure, heart rate, and BMI.', cost: 500 },
      ]
    },
    {
      name: 'Blood Checkup',
      subcategories: [
        { title: 'Thyroid', description: 'Evaluates thyroid function and hormone levels.', cost: 300 },
        { title: 'Sugar', description: 'Measures blood glucose levels for diabetes assessment.', cost: 250 },
        { title: 'Uric Acid', description: 'Tests for high levels of uric acid in the blood.', cost: 400 },
        { title: 'Cholesterol', description: 'Assesses levels of cholesterol in the blood.', cost: 350 },
      ]
    },
    {
      name: 'Dental Care',
      subcategories: [
        { title: 'Teeth Cleaning', description: 'Professional cleaning to remove plaque and stains.', cost: 500 },
        { title: 'Fillings', description: 'Restoration of tooth structure damaged by decay.', cost: 600 },
        { title: 'Extractions', description: 'Removal of a tooth or teeth from the socket.', cost: 700 },
        { title: 'Dentures', description: 'Removable replacement for missing teeth.', cost: 800 },
      ]
    },
      {
        name: 'Skin',
        subcategories: [
          { title: 'Acne', description: 'Common skin condition with pimples and inflammation.', cost: 300 },
          { title: 'Eczema', description: 'Inflammatory skin condition causing itching and redness.', cost: 250 },
          { title: 'Psoriasis', description: 'Chronic skin disease characterized by red patches.', cost: 400 },
          { title: 'Dermatitis', description: 'Skin inflammation causing itching and rash.', cost: 350 },
        ]
      },
    {
      name: 'Heart Health',
      subcategories: [
        { title: 'Blood Pressure', description: 'Measures the force of blood against artery walls.', cost: 200 },
        { title: 'Cholesterol Levels', description: 'Evaluates different types of cholesterol in the blood.', cost: 250 },
        { title: 'Heart Rate', description: 'Number of heartbeats per minute.', cost: 150 },
        { title: 'Cardiac Checkup', description: 'Assessment of overall heart health.', cost: 300 },
      ],
    },
    // Add more categories as needed
  ];

  const handleCategoryClick = (categoryIndex) => {
    setSelectedCategory(categoryIndex);
    setSelectedSubcategories([]);
  };

  const handleSubcategoryClick = (subcategoryIndex) => {
    const isSelected = selectedSubcategories.includes(subcategoryIndex);
    setSelectedSubcategories((prevSelected) =>
      isSelected
        ? prevSelected.filter((index) => index !== subcategoryIndex)
        : [...prevSelected, subcategoryIndex]
    );
  };

  const getTotalCost = () => {
    if (selectedSubcategories.length === 0) {
      return 0;
    }
    const selectedCategoryData = categories[selectedCategory];
    return selectedSubcategories.reduce(
      (total, subcategoryIndex) => total + selectedCategoryData.subcategories[subcategoryIndex].cost,
      0
    );
  };

  const totalCost = getTotalCost();

  const handleSubmit = () => {
    // You can perform actions with the totalCost and selectedSubcategories here
    // For now, let's just reset the state
    setSelectedSubcategories([]);
    setSelectedCategory(0);
  };

  return (
    <div className="bg-white">
      <div className='w-4/5 mx-auto flex flex-wrap justify-start'>
      <div className='w-full font-semibold text-4xl text-center' id='textColor'>
        <div className='flex my-4'>
          <MdHealthAndSafety /> &nbsp; &nbsp;
          <h1 className='text-4xl font-medium'>Checkup</h1>
        </div>
        </div>
      </div>
      <div className="flex h-screen bg-white w-4/5 mx-auto">
        {/* Sidebar */}
        <div className="w-1/4 p-4 border-r border-gray-300">
          <ul>
            {categories.map((category, index) => (
              <li
                key={index}
                onClick={() => handleCategoryClick(index)}
                className={`mt-2 cursor-pointer rounded-md text-xl pl-3 py-3 ${
                  selectedCategory === index ? 'bg-gray-300' : 'hover:bg-gray-100'
                } border-b border-gray-300`}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        {/* Sidebar */}

        {/* Main Content */}
        <div className="flex-grow border-gray-300 p-8">
          {selectedCategory !== null && (
            <div>
              <h3 className="text-2xl font-bold mb-4">{categories[selectedCategory].name}</h3>
              <ul>
                {categories[selectedCategory].subcategories.map((subcategory, index) => (
                  <li
                    key={index}
                    onClick={() => handleSubcategoryClick(index)}
                    className={`mb-2 p-2 flex justify-between ${
                       'border-b border-gray-300'
                                          } ${
                      selectedSubcategories.includes(index)
                        ? 'bg-gray-300 shadow-md rounded-md'
                        : 'hover:bg- cursor-pointer'
                    }`}
                  >
                    <div>
                      <h4 className="text-xl font-semibold">{subcategory.title}</h4>
                      <p>{subcategory.description}</p>
                    </div>
                    <div className="text-right">
                      <p>Rs. {subcategory.cost}</p>
                    </div>
                  </li>
                ))}
                <div className='flex items-center font-bold justify-between'>
                  {selectedSubcategories.length > 0 && <li className="mt-4  text-xl">Total Cost: Rs. {totalCost}</li>}
                  {selectedSubcategories.length > 0 && (
                    <li className="mt-4 flex justify-end">
                      <button
                        onClick={handleSubmit}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                      >
                        Book Now
                      </button>
                    </li>
                  )}
                </div>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkups;
