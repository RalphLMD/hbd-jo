import React from 'react'

import yj from '../../images/yj.png'
import jsm from '../../images/jsm.jpg'
import sof from '../../images/sof.png'
import rsof from '../../images/rsof.png'
import penguin from '../../images/penguin.png'
import jm from '../../images/jm.jpg'


import {
    AboutContainer,
    AboutImg,
    AboutImgTwo,
    AboutImgThree,
    AboutCol,
    AboutRow,
    AboutP
} from './AboutElements'

const AboutSection = () => {
    return(
        <>
            <AboutContainer id='about'>
                    <AboutImg src={yj}/>
                    <AboutCol>
                        <AboutRow>
                            <div>
                                <AboutP>
                                    According to the dictionary, it is often used in addressing a special person such as a sweetheart or dear. In Filipino, it is reportedly used as a term of endearment, someone you call your girlfriend or boyfriend. In short your Jowa. 
                                </AboutP>
                                <AboutImgThree src={penguin}/>
                                <AboutP>
                                    For me it means much more than I can describe in words, It is something that I frequently use to call you and will forever remain in a special place in my heart. 
                                </AboutP>
                            </div>
                        </AboutRow>
                        <AboutRow>
                        <AboutImgTwo src={jsm}/>
                        </AboutRow>
                    </AboutCol>

                    <AboutImg src={rsof}/>
                    <AboutCol>
                    <AboutRow>
                        <AboutImgTwo src={jm}/>
                    </AboutRow>
                    <AboutRow>
                            <div>
                                <AboutP>
                                    The theme that I picked for this gift is the red strings of fate or “unmei no akai kito”. It is where two people connected by red thread are destined lovers, regardless of place, time, or circumstances. It said that this cord may stretch or tangle, but never break. 
                                </AboutP>
                                <AboutImgThree src={sof}/>
                                <AboutP>
                                    I don't know what the future holds for both of us whether fate will bring us back together. But all I know right now is that I will cherish every memory and moment we will have and I will never regret anything. I will respect every decision and choice you made and hope you all the happiness, success and love in the world.
                                </AboutP>
                            </div>
                        </AboutRow>
                    </AboutCol>
            </AboutContainer>
        </>
    )
}

export default AboutSection