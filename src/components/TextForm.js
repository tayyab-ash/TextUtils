import React, { useState } from "react";
import "./TextForm.css"

export default function TextForm(props) {

  //Function to convert to Upper Case
  const upperCase = () => {
    let upperText = text.toUpperCase();
    setText(upperText);
  };

  //Function to convert to Lower Case
  const lowerCase = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
  };

  //Funcition to Clear the Textarea
  const clear = () => {
    setText("");
    setReplace("");
    setWReplace("");
    setWordCount(0);
  };

  //Function to convert to Sentence Case
  const sentenceCase = () => {
    const sentences = text.split(". ");
    const capSentences = sentences.map(
      (sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1)
    );
    setText(capSentences.join(". "));
  };

  //Function to remove extra spaces
  const removeSpace=()=>{
    let remove = text.replace(/\s+/g, ' ');
    setText(remove);
  }

  //Function to Copy Text
  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied", "success");
  };

  //Function to Allow editing of text in the Textarea
  const changeValue = (event) => {
    const newText = event.target.value;
    setText(newText);
    updateWordCount(newText);
  };

  //Function to count words
  const updateWordCount = (newText) => {
    const wordsArr = newText.split(/\s+/).filter((word) => word !== ""); // Filter out empty strings
    setWordCount(wordsArr.length);
  };

  //the below two functions are used to Allow editing of text in the input fields
  const changeValue2 = (event) => {
    let rText = event.target.value;
    setReplace(rText);
  };
  const changeValue3 = (event) => {
    let wText = event.target.value;
    setWReplace(wText);
  };

  //Function to replace text
  const replaceText = () => {
    let replacingText = rplace;
    let replacementText = withR;
    let newstr = text.replace(new RegExp(replacingText, "gi"), replacementText);
    setText(newstr);
  };

  //all the hooks
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [rplace, setReplace] = useState("");
  const [withR, setWReplace] = useState("");
  

  return (
    <>
      <div>
        <div
          className={`mb-3 text-${props.mode === "light" ? "black" : "light"}`}
        >
          <h1>{props.heading}</h1>
          <textarea
            className={`form-control ${props.changePtext? 'white':'black'}`}
            id="myBox"
            rows="8"
            value={text}
            onChange={changeValue}
            placeholder="Enter text here"
            style={{
              backgroundColor:
                props.mode === "light" ? "white" : "#272e35",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
          <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'? 'secondary':props.navBg} mt-2 mx-1`} onClick={upperCase}>
            Upper Case
          </button>
          <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'? 'secondary':props.navBg} mt-2 mx-1`} onClick={lowerCase}>
            Lower Case
          </button>
          <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'? 'secondary':props.navBg} mt-2 mx-1`} onClick={sentenceCase}>
            Sentence Case
          </button>
          <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'? 'secondary':props.navBg} mt-2 mx-1`} onClick={removeSpace}>
            Remove Extra Spaces
          </button>
          <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'? 'secondary':props.navBg} mt-2 mx-1`} onClick={copyText}>
            Copy
          </button>
          <button disabled={text.length===0}
            className={`btn btn-${props.mode==='dark'? 'secondary':props.navBg} mx-1 mt-2`}
            onClick={clear}
          >
            Clear
          </button>
          <p className="mt-2">
            <b>Words: </b>
            {wordCount} <b>Characters: </b>
            {text.length}
          </p>
          <h4 className="mt-2">Replace</h4>
          <div className="input-group mb-3 mt-2">
            <input
              type="text"
              className={`form-control ${props.changePtext? 'white':'black'}`}
              placeholder="To"
              aria-label=""
              aria-describedby="basic-addon1"
              value={rplace}
              onChange={changeValue2}
              style={{
                backgroundColor:
                  props.mode === "light" ? "white" : "#272e35",
                color: props.mode === "light" ? "black" : "white",
              }}
            />
          </div>
          <div class="input-group mb-3">
            <input
              type="text"
              class={`form-control rounded-2 ${props.changePtext? 'white':'black'}`}
              placeholder="With"
              aria-label="With"
              value={withR}
              onChange={changeValue3}
              aria-describedby="basic-addon2"
              style={{
                backgroundColor:
                  props.mode === "light" ? "white" : "#272e35",
                color: props.mode === "light" ? "black" : "white",
              }}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={replaceText}
                disabled={withR.length===0}
                style={{
                  backgroundColor:
                    props.mode === "light" ? "white" : "rgb(84, 93, 113)",
                  border:
                    props.mode === "light"
                      ? "1px solid #6c757d"
                      : "1px solid white",
                  color: props.mode === "light" ? "black" : "white",
                }}
              >
                Replace
              </button>
            </div>
          </div>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Preview text here."}</p>
        </div>
      </div>
    </>
  );
}