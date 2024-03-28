import { useRef, useState } from "react";
import "../styles/gate.css";
import { styled } from "styled-components";
import useKey from "../hooks/useKey.js";
import { toast } from "react-toastify";
import SD from "../SD.js";
import { setGameState } from "../gameSlice.js";
import {useDispatch}from 'react-redux'
import {socket} from '../socket.js'
const Button = styled.button`
  width: 160px;
  height: 40px;
  background-color: var(--MediumPurple);
  cursor: pointer;
  margin: auto;
  display: block;
  border: none;
  outline: none;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  border-radius: 5px;
`;
export default function Gate() {
  const dispatch = useDispatch()
  const [focused, setFocused] = useState(false);
  const ref = useRef();
  const notify = ({ msg }) => toast(msg);
  function findMatch() {
    if (!ref.current.value.trim()) {
      notify({ msg: SD.errorMessages.invalidName });
      return;
    }
    dispatch(setGameState(SD.gameStates.search))
    if(!socket.connected) socket.connect()
  }
  useKey("enter", () => {
    if (!focused) {
      setFocused(true);
      ref.current.focus();
    } else findMatch();
  });
  useKey("escape", () => {
    setFocused(false);
    ref.current.blur();
  });
  return (
    <div className="gate">
      <span>rules</span>
      <ul>
        <li>okey 101 rules are valid</li>
        <li>numbers should be sorted</li>
      </ul>
      <input ref={ref} placeholder="enter name" maxLength={20}></input>
      <Button onClick={findMatch}>find match ...</Button>
    </div>
  );
}
