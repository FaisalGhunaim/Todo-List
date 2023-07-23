import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ items }) => {
  return (
    <div className="grocery-list">
      {items.map((ele, index) => {
        return (
          <article className="grocery-item">
            <p  className="title">
              {ele}
            </p>
            <div className="btn-container">
              <button className="edit-btn">
                <FaEdit />
              </button>
              <button className="delete-btn" >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List
