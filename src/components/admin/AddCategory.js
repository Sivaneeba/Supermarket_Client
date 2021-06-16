import React, { useState } from "react";
import PCategoryService from "../../services/pCategory.service";

const AddCategory = () => {
  const initialCategoryState = {
    id: null,
    name: "",
    description: ""    
  };
  const [category, setCategory] = useState(initialCategoryState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCategory({ ...category, [name]: value });
  };

  const saveCategory = () => {
    var data = {
      name: category.name,
      description: category.description
    };

    PCategoryService.create(data)
      .then(response => {
        setCategory({
          id: response.data.id,
          name: response.data.name,
          description: response.data.description          
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newCategory = () => {
    setCategory(initialCategoryState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newCategory}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <h3>Add Category</h3>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={category.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={category.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>
          <br/>
          <button onClick={saveCategory} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddCategory;