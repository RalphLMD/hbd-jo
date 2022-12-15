import styled from 'styled-components'

export const AboutContainer = styled.div`
    margin-top: 20px;
    text-align: center;
`

export const AboutP = styled.p`
    text-align: justify;
    margin: 5px;
`

export const AboutImg = styled.img`
    margin-top: 30px;
    max-width: 100%;
    width: 600px;
    border-bottom: 4px solid #D34649;
`

export const AboutImgTwo = styled.img`
    max-width: 100%;
    width: 300px;
    height: 420px;
    border-bottom: 4px solid #D34649;
`

export const AboutImgThree = styled.img`
    max-width: 100%;
    width: 600px;
    &:hover {
        transform: scale(1.2);
        transition: all ease 1s;
    }
`

export const AboutCol = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 10px;
    
    @media screen and (max-width: 900px) {
        flex-direction: column;
        margin: 20px;
    }
`

export const AboutRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-basis: 30%;
    margin:0;
`