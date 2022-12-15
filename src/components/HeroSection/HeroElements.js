import styled from 'styled-components'

export const HeroContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 800px;
    z-index: 1;
    position: relative;
`   

export const HeroBgContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right:0;
    bottom:0;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    z-index: -1;
`

export const HeroBg = styled.img`
    width: 35%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    margin: 30px;
`

export const HeroProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 500px;
    padding: 40px;
    @media screen and (max-width: 1450px) {
        margin-left: 0px;
        margin: 20px;
        transition: all 1s ease;
    }

`

export const HeroImg = styled.img`
    max-height: 100%;
    height: 500px;
    opacity: 1;
    @media screen and (max-width: 700px) {
        height: 300px;
        transition: all 1s ease;
    }
`

export const HeroButton = styled.a`
    padding: 1rem;
    border-radius: 30px;
    background-color: #000000;
    color: #ffffff;
    text-decoration: none;
    font-weight: 800;
    transition: all ease 1s;
    cursor: pointer;
    
    &:hover {
        transform: scale(1.2);
        background-color: #D34649;
    }
`


