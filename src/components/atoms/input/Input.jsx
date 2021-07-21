import styled from "styled-components";

export const Input = (props) => {

    const { name = "", placeholder = "", value, onChange } = props;
    return <SInput type="text" name={name} placeholder={placeholder} value={value} onChange={onChange}  />

}

const SInput = styled.input`
    padding: 8px 16px;
    border: solid #ddd 1px;
    border-radius: 200px;
    width:500px;
    outline: none;
    &:invalid{
        border: solid #FADBDA 1px;
    }
    &:focus{
        background-color:#ddd
    }
`