import styled from 'styled-components'

export const TabsContainer = styled.div`
    margin-top: 20px;
    text-align: center;
    height: 150vh;

    @media screen and (max-width: 850px) {
        height: 200vh;
    }
`
export const TabsImg = styled.img`
    margin-top: 20px;
    margin-bottom: 20px;
    max-width: 100%;
    width: 600px;
    border-bottom: 4px solid #D34649;
`

export const TabsImgTwo = styled.img`
    max-width: 100%;
    width: 400px;
`

export const TabsContent = styled.div`
    margin: 30px auto;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`

export const TabsCol = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 800px;
    
    @media screen and (max-width: 850px) {
        flex-direction: column;
        margin: 20px;
        width: 400px;
    }
`

export const TabsRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-basis: 50%;
    margin:0;
`
export const TabsP = styled.p`
    text-align: justify;
    margin: 25px;
`