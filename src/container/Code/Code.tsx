import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "../../app/store";
import Button from "../../components/Button";
import {addNumber, check, removeNumber} from "./codeSlice";
import './Code.css';

const BTN_VALUES = [
  '7', '8', '9', '4', '5', '6', '1', '2', '3'
];

const Code = () => {
  const dispatch = useDispatch();
  const codeStars = useSelector((state: RootStore) => state.code.stars);
  const codeStyle = useSelector((state: RootStore) => state.code.style);
  const codeMessage = useSelector((state: RootStore) => state.code.message);

  return (
    <div className="d-flex flex-column col py-5">
      <div className="d-flex justify-content-center">
      <p className="starPlace p-2 mb-1"
          style={{background: codeStyle}}>
        {codeMessage ? codeMessage : codeStars}
      </p>
      </div>
      <div className="border-dark d-flex justify-content-center">
        <div className="displayCode">
          {BTN_VALUES.map(value => (
            <Button key={value} value={value} onClick={() => dispatch(addNumber(value))}/>
          ))}
          <Button value={'<'} onClick={() => dispatch(removeNumber())}/>
          <Button value={'0'} onClick={() => dispatch(addNumber('0'))}/>
          <Button value={'E'} onClick={() => dispatch(check())}/>
        </div>
      </div>
    </div>
  );
};

export default Code;