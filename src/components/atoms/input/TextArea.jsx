import styled from "styled-components";

export const TextArea = (props) => {

    const { placeholder = "" } = props;
    return <STextArea type="text" placeholder={placeholder} />

}

const STextArea = styled.textarea`
    padding: 8px 16px;
    border: solid #ddd 1px;
    border-radius:10px;
    outline: none;
    resize: none;
    width: 500px;
    height: 100px;
    margin-bottom:10px;
`