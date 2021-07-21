import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Card } from "../atoms/card/Card";

export const InquiryCard = (props) => {
    const { inquiry, inquiryId } = props;
    const history = useHistory();
    console.log(inquiry.id);
    
    //詳細ボタンを押すと相談詳細ページに遷移する
    const onClickDetail = () => {
        history.push({ pathname: "/detail", state: { inquiryId: inquiry.id } });
        console.log(inquiry.id + "ここ");
    };

    return (
        <Card>
            <SDl>
                <dt>依頼タイトル</dt>
                <dd>{inquiry.title}</dd>
                <dt>こんな人を探しています</dt>
                <dd>{inquiry.features}</dd>
                <dt>依頼者名</dt>
                <dd>{inquiry.name}</dd>
                <dt>メールアドレス</dt>
                <dd>{inquiry.mail}</dd>
                <dt>投稿日時</dt>
                <dd>{new Date(inquiry.timestamp?.toDate()).toLocaleString()}</dd>
                {/* <dt>ID</dt>
                <dd>{inquiry.id}</dd> */}

            </SDl>
            <br/>
            <br/>
            <PrimaryButton onClick={onClickDetail}>詳細</PrimaryButton>
        </Card>
    )
}

const SDl = styled.dl`
    text-align: left;
    margin-bottom: 0px;
    dt{
        float: left;
        margin-right: 10px;
    }
    dd{
        padding-left: 80px;
        padding-bottom: 8px;
        overflow-wrap: break-word;
    }
`