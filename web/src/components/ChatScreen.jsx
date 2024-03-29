import { Fragment } from 'react'
import '../styles/chatscreen.css'
export default function ChatScreen({messages}){
    console.log(messages)
    return(
        <div className="cahtscreen">
            {messages.map((chat , i) =>{
                return <Fragment key={i}>
                    <hr/>
                    <div className='chatoutput'>{chat}</div>
                </Fragment>
            })}
        </div>
    )
}