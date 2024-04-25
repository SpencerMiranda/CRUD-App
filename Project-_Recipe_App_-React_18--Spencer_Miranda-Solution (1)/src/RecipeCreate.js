import React, { useState } from "react";

function RecipeCreate({ onAddRecipe }) {
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRecipe(formData);
    setFormData({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: ""
    });
  };

  return (
    <form 
      name="create" 
      onSubmit={handleSubmit} 
      style={{
        display: "flex", 
        flexDirection: "row", 
        alignItems: "center",
        marginBottom: "20px", // Spacing between form and table
        backgroundColor: "#fff0c7" // Zebra coloring
      }}
    >
      <input 
        type="text" 
        name="name" 
        value={formData.name} 
        onChange={handleChange} 
        placeholder="Name" 
        style={{ flex: "1", marginRight: "10px", marginLeft: "10px", fontSize: "12px", padding: "5px", boxSizing: "border-box", maxWidth: "15%" }} 
      />
      <input 
        type="text" 
        name="cuisine" 
        value={formData.cuisine} 
        onChange={handleChange} 
        placeholder="Cuisine" 
        style={{ flex: "1", marginRight: "10px", fontSize: "12px", padding: "5px", boxSizing: "border-box", maxWidth: "15%" }} 
      />
      <input 
        type="text" 
        name="photo" 
        value={formData.photo} 
        onChange={handleChange} 
        placeholder="Photo URL" 
        style={{ flex: "1", marginRight: "10px", fontSize: "12px", padding: "5px", boxSizing: "border-box", maxWidth: "15%" }} 
      />
      <textarea 
        name="ingredients" 
        value={formData.ingredients} 
        onChange={handleChange} 
        placeholder="Ingredients" 
        style={{ flex: "1", marginRight: "10px", fontSize: "12px", padding: "5px", boxSizing: "border-box", maxWidth: "150px" }} 
      />
      <textarea 
        name="preparation" 
        value={formData.preparation} 
        onChange={handleChange} 
        placeholder="Preparation" 
        style={{ flex: "1", marginRight: "10px", fontSize: "12px", padding: "5px", boxSizing: "border-box", maxWidth: "150px" }} 
      />
      <button 
        type="submit" 
        style={{ 
          flexBasis: "auto", 
          fontSize: "12px",
          padding: "5px 10px", // Adjusted padding
          marginLeft: "10px", // Added margin to the left
          marginRight: "5px" // Added margin to the right
        }}
      >
        Create
      </button>
    </form>
  );
}

export default RecipeCreate;

