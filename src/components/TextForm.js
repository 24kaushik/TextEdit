import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleInverseClick = () => {
    setText(text.split("").reverse().join(""));
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(text);
    } catch (err) {
      alert("Failed to copy: " + err);
    }
  };
  
  return (
    <div>
      <div
        className="container text-center"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "#00000026" : "white",
              color: props.mode === "dark" ? "white" : "black"
            }}
            placeholder="Enter text here"
            className={`form-control ${props.mode=== 'dark' ? 'darkTextArea' : ''}`}
            onChange={handleOnChange}
            value={text}
            id="textArea"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleInverseClick}
        >
          Inverse text
        </button>
        <button className="btn btn-success mx-1 my-1" onClick={handleCopy}>
          Copy text
        </button>
        <button className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>
          Clear text
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.split("").length} characters{" "}
        </p>
      </div>
    </div>
  );
}
