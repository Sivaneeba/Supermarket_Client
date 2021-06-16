import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import userService from "../../services/user.service";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    retrieveUsers();
  }, []);

  const onChangeSearchName = e => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const retrieveUsers = () => {
    userService.getAll()
      .then(response => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveUsers();
    setCurrentUser(null);
    setCurrentIndex(-1);
  };

  const setActiveUser = (user, index) => {
    setCurrentUser(user);
    setCurrentIndex(index);
  }; 

  const findByName = () => {
    userService.findByName(searchName)
      .then(response => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteUser = () => {
    userService.remove(currentUser.id)
      .then(response => {
        console.log(response.data);        
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };
  
  return (
    <div>     
      <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by username"
            value={searchName}
            onChange={onChangeSearchName}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByName}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Users List</h4>

        <ul className="list-group">      
        {users &&
            users.map((user, index) => ( 
                <div key ={user.id}>
                    {
                        user.roles.map((role,i)=>(
                            <div key = {role.id}>
                                {role.name === "user" ? (
                                    <li
                                    className={
                                      "list-group-item " + (index === currentIndex ? "active" : "")
                                    }
                                    onClick={() => setActiveUser(user, index)}
                                    key={index}
                                  >
                                    {user.username}
                                  </li>
                                ): (
                                   <div></div>
                                )}
                            </div>
                        ))
                    }
                </div>                          
              
            ))}            
        </ul>
        
      </div>
      <div className="col-md-6">
        
        {currentUser ? (
          <div>
            <h4>User</h4>
            <div>
              <label>
                <strong>Name:</strong>
              </label>{" "}
              {currentUser.username}
            </div>
            <div>
              <label>
                <strong>Email:</strong>
              </label>{" "}
              {currentUser.email}
            </div>             

            <button className="badge badge-danger mr-2" onClick={deleteUser}>
            Delete
          </button>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a User...</p>
          </div>
        )}
      </div>
    </div>
      
    </div>
  );
};

export default UserList;