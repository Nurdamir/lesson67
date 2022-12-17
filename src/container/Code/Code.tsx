import React, {useState} from 'react';
import './Code.css';
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "../../app/store";
import Button from "../../components/Button";
import {addNumber, check, removeNumber} from "./codeSlice";

const BTN_VALUES = [
  '7', '8', '9', '4', '5', '6', '1', '2', '3'
];

const Code = () => {
  const dispatch = useDispatch();
  const codeStars = useSelector((state: RootStore) => state.code.stars);
  const codeStyle = useSelector((state: RootStore) => state.code.style);
  const codeMessage = useSelector((state: RootStore) => state.code.message);


  return (
    <div className="Counter">
      <h1 style={{background: codeStyle}}>{codeMessage? codeMessage : codeStars}</h1>

      <div className={"displayCalc"}>
        {BTN_VALUES.map(value => (
          <Button key={value} value={value} onClick={() => dispatch(addNumber(value))}/>
        ))}
        <Button value={'<'} onClick={() => dispatch(removeNumber())}/>
        <Button value={'0'} onClick={() => dispatch(addNumber('0'))}/>
        <Button value={'E'} onClick={() => dispatch(check())}/>
      </div>
    </div>
  );
};

export default Code;