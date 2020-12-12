import styled from 'vue-styled-components';

const BtnProps = { 
  color:String,
  block:Boolean,
  height:Number 
};

export const Button = styled('button',BtnProps)`
    cursor: pointer;
    height:${(props) => (props.height ? `${props.height}px` : `${36}px`)};
    width:${(props) => {
      if (props.block) {
        return '100%';
      }
      return props.width && `${props.width}px`;
    }};
    border-radius:4px;
    padding:9px 20px;
    font-weight:900;
    box-shadow:none;
    background-color:${props => {
      return props.color === 'default' ? props.theme.colors.primary : props.theme.colors.secondary
    }};
    color:#fff;
    outline:none;
    border:none;
    
    &:hover{
        opacity: 0.85;
        box-shadow:none;
    }

    @media screen and (max-width:960px) {
        width:100%;
    }
`;