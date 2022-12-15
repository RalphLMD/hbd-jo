import React from 'react'

import msg from '../../images/msg.png'
import hbd from '../../images/hbd.png'
import mc from '../../images/mc.png'
import mcp from '../../images/mcp.png'

import {
    MessagesContainer,
    MessagesCol,
    MessagesRow,
    MessagesImg,
    MessagesImgTwo,
    MessagesP,
    MessagesButton
} from './MessagesElements'

const MessagesSection = () => {
    return(
        <>
            <MessagesContainer id='messages'>
            <MessagesImg src={msg}/>
                <MessagesCol>
                    <MessagesRow>
                        <MessagesImgTwo src={hbd}/>
                        <MessagesButton href="https://youtu.be/pJGIG_BVifI" target="_blank">Click me</MessagesButton>
                    </MessagesRow>
                    <MessagesRow>
                        <div>
                        <MessagesP>It is impossible to find someone like you again in my life, but God was too kind for giving me a chance and opportunity to know someone like you.</MessagesP>
                        <MessagesP> All I wish for you now is a very happy birthday and more years filled with love, success and blessings along with your family and friends.</MessagesP>
                        </div>
                    </MessagesRow>
                </MessagesCol>

                <MessagesCol>
                    <MessagesRow>
                    <MessagesImgTwo src={mc}/>
                    <MessagesButton href={mcp} target="_blank">Click me</MessagesButton>
                    </MessagesRow>
                    <MessagesRow>
                        <div>
                            <MessagesP>Merry Christmas Jo!</MessagesP>
                            <MessagesP>I really wanted to spend christmas with you and your family. But as you already know our circumstances doesn`t allow us. Though I still want to greet and wish you a Merry Christmas! May this season and every day provide you, full of joy and blessings.</MessagesP>
                            <MessagesP>Also, I want to thank you for all the love and happiness that you have given me.</MessagesP>
                        </div>
                    </MessagesRow>
                </MessagesCol>

            </MessagesContainer>
        </>
    )
}

export default MessagesSection