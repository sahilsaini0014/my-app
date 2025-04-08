import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here now");
  return (
    <>
      <div className="mb-3 my-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          {props.heading}
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text}
          onChange={handleOnchange}
          rows="5"
        ></textarea>
        <button className="btn btn-primary my-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>
          Convert to lowercase
        </button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} Words {text.length} Charcters
          <p>{0.008 * text.split(" ").length} minutes to read</p>
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
