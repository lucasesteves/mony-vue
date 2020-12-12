import styled from 'vue-styled-components'

export const Main=styled.div`
    grid-area: m;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 160px calc(calc(100vh - 72px) - 160px - 60px);
    padding:20px;
    grid-template-areas: 
    "c1 c1 c2 c2"
    "li li li li";
    row-gap:20px;
    column-gap: 20px;

    #c1{
        grid-area: c1;
    }

    #c2{
        grid-area: c2;
    }

    #li{
        grid-area:li;
    }

    @media only screen and (max-width: 960px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 160px) repeat(1, 350px);
        grid-template-areas:
            "c1"
            "c2"
            "li";
    }
`