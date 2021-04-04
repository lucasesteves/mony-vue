import styled from 'vue-styled-components'

const SpaceProps = {
    size:Number
}

export const Wrapper = styled.div`
    background:${props=>props.theme.colors.primary};
    width:100vw;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const Card = styled.div`
    width:337px;
    height:437px;
    padding:32px;
    background:#fff;
    border-radius:10px;
    box-shadow: 0px 30px 60px #5159AC;

    @media (max-width:600px){
        background:none;
    }
`

export const Title = styled.h2`
    font-size:32px;
    font-family:Roboto, sans-serif; 
    color:${props=>props.theme.colors.text};
    display:flex;
    margin:${props=> !props.bottom ? `0px 0 12px 0` : `0px 0 52px 0`};
    justify-content:center;

    @media (max-width:600px){
        color:${props=>props.theme.colors.white};
    }

`

export const Label = styled.p`
    font-size:16px;
    font-family:Roboto, sans-serif; 
    font-weight:700;
    color:#000;
    display:flex;
    margin:0px 0 8px 0;
    justify-content:left;

    @media (max-width:600px){
        color:${props=>props.theme.colors.white};
    }
`;

export const Load = styled.div`
    display:flex;
    justify-content:center;
`;

export const Space = styled('div',SpaceProps)`
    height:${props=>props.size}px;
`;