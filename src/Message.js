import React from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';
import './Message.css';

//1:50:57 in video we are applying react flip move (effect) so we changed the function format(modified to class basesd)
// here forwardRef is a example of higher order function.
function Message  ({message,username}) {
    const isUser = username === message.username;
    //we attached the ref here below.
    return (
        <div className={`message ${isUser && 'message__user'}`}>
        <Card className ={isUser ? "message__userCard":"message__guestCard"}>
            <CardContent>  
            <Typography
            color="white"
            variant="h5"
            component="h2" 
            >
            {
                // we have modified thr below messsage thing
            }
            {!isUser && `${message.username || 'Unknown User' }: `} {message.message}
            </Typography>
            </CardContent>
        </Card>            
        </div>
    )
}

export default Message
