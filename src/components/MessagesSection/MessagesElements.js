import styled from 'styled-components'

export const MessagesContainer = styled.div`
    margin-top: 20px;
    text-align: center;
`
export const MessagesP = styled.p`
    text-align: justify;
    margin: 5px;
`
export const MessagesImg = styled.img`
    max-width: 100%;
    width: 600px;
    border-bottom: 4px solid #D34649;
    margin-bottom: 20px;
`

export const MessagesImgTwo = styled.img`
    max-width: 100%;
    margin-top: 20px;
    @media screen and (min-width: 500px) {
        width: 290px;
    }
`

export const MessagesCol = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 80%;
    height: 250px;
    margin: 30px auto;
    
    @media screen and (max-width: 900px) {
        flex-direction: column;
        margin: 170px auto;
    }
`

export const MessagesRow = styled.div`
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-basis: 30%;
    margin:0;
`

export const MessagesButton = styled.a`
    margin: 25px;
    padding: 1rem;
    border-radius: 30px;
    background-color: #000000;
    color: #ffffff;
    text-decoration: none;
    font-weight: 800;
    transition: all ease 1s;
    border: 2px solid;
    cursor: pointer;

    &:hover {
        transform: scale(1.2);
        background-color: #D34649;
        color: #ffffff;
    }
`
