import React, {useState} from 'react'

import '../TabsSection/tabs.css'

//Images, Icons
import ty from '../../images/ty.png'
import love from '../../images/love.png'
import care from '../../images/care.png'
import support from '../../images/support.png'

import {
    TabsContainer,
    TabsContent,
    TabsImg, 
    TabsImgTwo,
    TabsRow, 
    TabsCol,
    TabsP
} from './TabsElements'


const Tab = () => {
    const [ToggleState, setToggleState] = useState(1);
  
    const toggleTab = (index) => {
      setToggleState(index);
    };
  
    const getActiveClass = (index, className) =>
      ToggleState === index ? className : "";
  
    return (
      <>
      <TabsContainer id='thanks'>
        <TabsImg src={ty}/>
      <div className="container">
        <ul className="tab-list">
          <li
            className={`tabs ${getActiveClass(1, "active-tabs")}`}
            onClick={() => toggleTab(1)}
          >
            Love
          </li>
          <li
            className={`tabs ${getActiveClass(2, "active-tabs")}`}
            onClick={() => toggleTab(2)}
          >
            Care
          </li>
          <li
            className={`tabs ${getActiveClass(3, "active-tabs")}`}
            onClick={() => toggleTab(3)}
          >
            Support
          </li>
        </ul>
        <div className="content-container">
          <div className={`content ${getActiveClass(1, "active-content")}`}>
          <TabsContent>
                <TabsCol>
                    <TabsRow>
                        <div>
                          <TabsP>Thank you for loving me through everything. Thank you so much for being such a beautiful, wonderful, caring, loving, kind, and helpful person.</TabsP>
                          <TabsP>Never change! You made my life worth it and I couldn't be more thankful for it.</TabsP>
                          <TabsP>I am so lucky to have met you, know you, and have you in my life and for that, I will forever be grateful and feel blessed. </TabsP>
                        </div>
                    </TabsRow>
                    <TabsRow>
                        <TabsImgTwo src={love}/>
                    </TabsRow>
                </TabsCol>
            </TabsContent>
          </div>
          <div className={`content ${getActiveClass(2, "active-content")}`}>
            <TabsContent>
                <TabsCol>
                    <TabsRow>
                      <div>
                        <TabsP>Thank you for your caring words that have been a source of immense comfort and support, Thank you so much for always being there.</TabsP>
                        <TabsP>You are one of kind and let no one tell you different!</TabsP>
                        <TabsP>Don`t let anyone change the loving and caring person you are. Your heart is always filled with compassion and love and I`m so lucky to be a part of it.</TabsP>
                      </div>
                    </TabsRow>
                    <TabsRow>
                        <TabsImgTwo src={care}/>
                    </TabsRow>
                </TabsCol>
            </TabsContent>
          </div>
          <div className={`content ${getActiveClass(3, "active-content")}`}>
            <TabsContent>
                <TabsCol>
                    <TabsRow>
                      <div>
                        <TabsP>Thank you for believing in me. You supported me with anything and It really means so much to me. You inspired me and gave me a lot of motivation to move on forward.</TabsP>
                        <TabsP>I will also do the same for you. I will give you all the support that you need even if it is in a small way. Don`t ever be afraid to come to me.</TabsP>
                        <TabsP>Though I believe that you are a strong person whom I know can overcome all the challenges in life. But once in a while if you need someone to talk to or just because you can always depend on me.</TabsP>
                      </div>
                    </TabsRow>
                    <TabsRow>
                        <TabsImgTwo src={support}/>
                    </TabsRow>
                </TabsCol>
            </TabsContent>
          </div>
        </div>
      </div>
      </TabsContainer>
      </>
    )
  }
  
export default Tab