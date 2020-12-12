import styled from 'vue-styled-components';

export const Wrapper=styled.div`
    height:calc(calc(100vh - 72px) - 180px - 100px);  
    overflow-y:scroll;
`; 

export const Row=styled.div`
    display:flex;
    justify-content:space-between;
    border:1px solid #dedede;
    border-radius:4px;
    margin-bottom:12px;
    padding:10px 20px;
`;

export const Item=styled.p`
    font-family:Roboto, sans-serif;
    font-size:14px;
    flex:1;
`;

export const Icon = styled.div`
    color:#EF5837;

    &:hover{
        cursor: pointer;
    }
`;

export const Empty = styled.p`
    display:flex;
    justify-content:center;
    font-family:Roboto, sans-serif;
    font-size:18px;
`;