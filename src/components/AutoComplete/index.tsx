import React, { useState, ChangeEvent, InputHTMLAttributes } from "react";

import CloseIcon from "../../assets/svgs/close-icon";

import "./index.css";

interface IData {
  [data: string]: string;
}

interface IPropsInput<T> extends InputHTMLAttributes<T> {
  label?: string;
  data: IData[];
}

const AutoComplete = ({ label, data, ...props }: IPropsInput<any>) => {
  const [text, setText] = useState("");
  const [isShowingPaper, setIsShowingPaper] = useState(false);

  const matches =
    data &&
    data.filter((dataFiltered) => {
      return dataFiltered.email
        .toLowerCase()
        .includes(text.toLocaleLowerCase());
    });

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const targetValue = event.target.value;

    setText(targetValue);
  };

  const suggestedText = (value: any) => {
    setIsShowingPaper(false);
    setText(value);
  };

  const removeItemFromInput = () => {
    setText("");
  };

  const openOnClick = () => {
    setIsShowingPaper(true);
  };

  return (
    <div className="input-styled">
      <span>{label}</span>
      <div className="input-search">
        <input
          onChange={(event) => onChangeHandler(event)}
          onClick={openOnClick}
          value={text}
          {...props}
        />
        {text.length > 0 && (
          <CloseIcon
            size={24}
            className="close-icon"
            color="#666666"
            onClick={removeItemFromInput}
          />
        )}
      </div>

      <div
        className="input-list"
        style={{ display: isShowingPaper ? "flex" : "none" }}
      >
        {matches &&
          matches.map((dataFiltered: IData) => (
            <>
              <li
                key={dataFiltered.id}
                className={
                  dataFiltered.email === text
                    ? "list-item list-item_selected"
                    : "list-item"
                }
                onClick={() => suggestedText(dataFiltered.email)}
              >
                {dataFiltered.email}
              </li>
            </>
          ))}
        {matches.length <= 0 && (
          <li className="list-item_empty list-item">No Options</li>
        )}
      </div>
    </div>
  );
};

export default AutoComplete;
