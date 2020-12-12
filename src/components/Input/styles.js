import styled from 'vue-styled-components';

const InputProps = {
    height:Number
};

export const Input = styled('input', InputProps)`
    border: 1px solid rgba(135, 135, 135, 0.3);
    border-color: ${props=>props.theme.colors.grey};
    outline: none;
    border-radius: 4px;
    width:calc(100% - 21px);
    padding: 11px 10px;
    font-weight: 300;
    font-size: 16px;
    font-family: Roboto, sans-serif;
    font-style: normal;

    &:focus{
        border-color:${props=>props.theme.colors.primary};
    }
    ::placeholder {
        color: ${props=>props.theme.colors.grey};
        font-size: 15px;
      }
`;