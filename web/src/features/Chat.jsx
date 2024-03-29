import React, { Fragment, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "../styles/chat.css";
import ChatScreen from "../components/ChatScreen";
import useKey from "../hooks/useKey"
const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  function closeChat() {
    setIsOpen(false);
  }
  function sendChat() {
    // emit
    console.log(ref.current.value);
    //
    ref.current.value = ''
  }
  
  useKey('enter',()=>{
    if(!isOpen){
        setIsOpen(true)
    }
    else if(isOpen){
        let val = ref.current.value
        if(val.trim().length == 0) ref.current.focus()
        else sendChat()
    }
  })
  useKey('escape',()=>{
    setIsOpen(false)
  })
  return (
    <div className="chat-container">
      <button onClick={toggleSidebar} className="sidebar-button">
        Chat ...
      </button>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="sidebar"
        unmountOnExit
      >
        <div className="sidebar">
          <ChatScreen></ChatScreen>
          {isOpen && (
            <Fragment>
              <button onClick={closeChat} className="close-chat-button">
                close
              </button>
              <input placeholder="you can chat" className="chat-input" ref={ref}></input>
              <button onClick={sendChat} className="send-chat-button">
                send chat
              </button>
            </Fragment>
          )}
        </div>
      </CSSTransition>
    </div>
  );
};

export default Chat;
