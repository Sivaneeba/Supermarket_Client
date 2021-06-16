import React, { useState, useEffect } from "react";
import pCategoryService from "../../services/pCategory.service";
import { useHistory } from "react-router-dom";

const Category = props => {
  const initialCategoryState = {
    id: null,
    name: "",
    description: ""    
  };
  const [currentCategory, setCurrentCategory] = useState(initialCategoryState);
  const [message, setMessage] = useState("");

  const getCategory = id => {
    pCategoryService.get(id)
      .then(response => {
        setCurrentCategory(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getCategory(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentCategory({ ...currentCategory, [name]: value });
  };
 

  const updateCategory = () => {
    pCategoryService.update(currentCategory.id, currentCategory)
      .then(response => {
        console.log(response.data);
        setMessage("The category was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  
  let history = useHistory();

  return (
    <div>
      {currentCategory ? (
        <div className="edit-form">
          <h4>Category</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={currentCategory.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentCategory.description}
                onChange={handleInputChange}
              />
            </div>
            
          </form>      
          
          <button
            type="submit"
            className="badge badge-success"
            onClick={updateCategory}
          >
            Update
          </button>
          <p>{message}</p>

          <br/>
          <button onClick={() => history.goBack()}>Back</button>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Category...</p>
        </div>
      )}
    </div>
  );
};

export default Category;