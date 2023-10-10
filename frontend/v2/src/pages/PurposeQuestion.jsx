import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import QuestionOne from "../components/QuestionOne";
import QuestionTwo from "../components/QuestionTwo";
import QuestionThree from "../components/QuestionThree";
import QuestionFour from "../components/QuestionFour";
import QuestionFive from "../components/QuestionFive";
import QuestionSix from "../components/QuestionSix";
import Pagination from "../components/Pagination";
import QuestionViewWrapper from "../components/QuestionViewWrapper";
import QuestionSeven from "../components/QuestionSeven";
import PurposeStatement from "../components/PurposeStatement";
import { useDispatch, useSelector } from "react-redux";
import {
  createItem,
  getItem,
  updateItem,
} from "../redux/actions/purposeActions";
import Loading from "../utils/Loading";
import Message from "../utils/Message";

const PurposeQuestion = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form);
  const purpose = useSelector((state) => state.purpose);
  const { loading, error, item, success } = purpose;
  const location = useLocation();
  const [page, setPage] = useState(1);

  console.log(item);

  const changePage = (newPage) => {
    setPage(newPage);
  };

  const pageNo = location.search ? Number(location.search.split("=")[1]) : null;

  const questionViews = [
    {
      pageNo: 1,
      element: <QuestionOne />,
    },
    {
      pageNo: 2,
      element: <QuestionTwo />,
    },
    {
      pageNo: 3,
      element: <QuestionThree />,
    },
    {
      pageNo: 4,
      element: <QuestionFour />,
    },
    {
      pageNo: 5,
      element: <QuestionFive />,
    },
    {
      pageNo: 6,
      element: <QuestionSix />,
    },
    {
      pageNo: 7,
      element: <QuestionSeven />,
    },
    {
      pageNo: 8,
      element: <PurposeStatement />,
    },
  ];

  useEffect(() => {
    if (pageNo) {
      setPage(pageNo);
    }
  }, [pageNo]);

  // Use map to create an array of components
  const renderedQuestions = questionViews.map((view) => {
    if (view.pageNo === page) {
      return (
        <QuestionViewWrapper key={view.pageNo}>
          {view.element}
          {loading && <Loading />}
          <Pagination page={page} totalPages={8} changePage={changePage} />
        </QuestionViewWrapper>
      );
    }
    // Return null for pages that are not the current page
    return null;
  });

  return <div>{renderedQuestions}</div>;
};

export default PurposeQuestion;
