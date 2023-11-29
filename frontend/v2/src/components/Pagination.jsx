import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createItem } from "../redux/actions/purposeActions";

const Pagination = ({ page, totalPages, changePage }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const form = useSelector((state) => state.form);
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handleSubmit = () => {
    dispatch(createItem(form));
  };

  return (
    <div className='flex items-center justify-center my-3 px-4'>
      <Link
        to='/'
        className={`bg-maroon-red hover:bg-red-700 font-semibold py-2 px-4 rounded md:mr-2`}
      >
        <p className='text-white'>Home</p>
      </Link>
      <button
        onClick={() => changePage(page - 1)}
        className={`bg-maroon-red hover:bg-red-700 text-white font-semibold py-2 px-4 rounded md:mr-2 ${
          page === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={page === 1}
      >
        Prev
      </button>
      {pages.map((item) => {
        return (
          <button
            key={item}
            onClick={() => changePage(item)}
            className={`hover:bg-gray-200 text-gray-800 font-semibold py-2 px-2 md:px-4 rounded md:mx-2 ml-2 md:ml-0 ${
              item === page ? "bg-gray-300" : "bg-white"
            }`}
          >
            {item}
          </button>
        );
      })}
      <button
        onClick={() => {
          if (page === totalPages) {
            handleSubmit();
            navigate("/questions/answers");
          } else {
            changePage(page + 1);
          }
        }}
        className={`bg-maroon-red hover:bg-red-700 text-white font-semibold py-2 px-4 rounded ml-2 `}
      >
        {page === 8 ? "View Responses" : "Next"}
      </button>
    </div>
  );
};

export default Pagination;
