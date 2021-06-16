import React, { useState, useEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import pCategoryService from "../../services/pCategory.service";
import { useTable } from "react-table";

const CategoryList = (props) => {
  const [categories, setCategories] = useState([]);
  const [searchName, setSearchName] = useState("");
  const categoriesRef = useRef();

  categoriesRef.current = categories;

  useEffect(() => {
    retrieveCategories();
  }, []);

  const onChangeSearchName = (e) => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const retrieveCategories = () => {
    pCategoryService.getAll()
      .then((response) => {
        setCategories(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveCategories();
  };

  const removeAllCategories = () => {
    pCategoryService.removeAll()
      .then((response) => {
        console.log(response.data);
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findByName = () => {
    pCategoryService.findByName(searchName)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const openCategory = (rowIndex) => {
    const id = categoriesRef.current[rowIndex].id;

    props.history.push("/admin/categories/" + id);
  };

  const deleteCategory = (rowIndex) => {
    const id = categoriesRef.current[rowIndex].id;

    pCategoryService.remove(id)
      .then((response) => {
        props.history.push("/admin/categories");

        let newCategories = [...categoriesRef.current];
        newCategories.splice(rowIndex, 1);

        setCategories(newCategories);
      })
      .catch((e) => {
        console.log(e);
      });
  };  

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Description",
        accessor: "description",
      },      
      {
        Header: "Actions",
        accessor: "actions",
        Cell: (props) => {
          const rowIdx = props.row.id;
          return (
            <div>
              <span onClick={() => openCategory(rowIdx)}>
                <i className="far fa-edit action mr-2"></i>
              </span>
              &nbsp;
              <span onClick={() => deleteCategory(rowIdx)}>
                <i className="fas fa-trash action"></i>
              </span>              
            </div>
          );
        },
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data: categories,
  });

  return (
    <div className="list row">           
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
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
      <div className="col-md-12 list">
      <h4>Categories List</h4>
        <table
          className="table table-striped table-bordered"
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="col-md-8">
        <button className="btn btn-sm btn-danger" onClick={removeAllCategories}>
          Remove All
        </button>
      </div>
    </div>
  );
};

export default CategoryList;