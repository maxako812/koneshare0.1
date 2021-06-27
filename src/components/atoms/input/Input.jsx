import styled from "styled-components";

export const Input = (props) => {

    const { placeholder = "", value, onChange,ref } = props;
    return <SInput type="text" placeholder={placeholder} value={value} onChange={onChange} ref={ref} />

}

const SInput = styled.input`
    padding: 8px 16px;
    border: solid #ddd 1px;
    border-radius: 200px;
    width:500px;
    outline: none;
`