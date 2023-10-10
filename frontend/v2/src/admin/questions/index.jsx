import React, { useState } from "react";
import SideBar from "../sidebar/SideBar";
import TopBar from "../topbar/TopBar";
import RichTextEditor from "../texteditor/RichTextEditor";
import DOMPurify from "dompurify";
import "./questions.css";

const Questions = () => {
  const [content, setContent] = useState("");

  const handleEditorChange = (value) => {
    setContent(value);
  };
  return (
    <div className='dashboard-container'>
      <SideBar />
      <div className='content'>
        <TopBar />
        <div className='container mt-3'>
          <div className='row d-flex justify-content-center my-3'>
            <div className='col-lg-10 col-md-10 col-sm-10'>
              <div className='shadow-sm '>
                <h6>Question title</h6>
                <p>Question description</p>
                <form>
                  <RichTextEditor
                    value={content}
                    onChange={handleEditorChange}
                  />
                  <button type='submit my-5'>Save</button>
                </form>
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(content),
                  }}
                  className='render-content'
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
