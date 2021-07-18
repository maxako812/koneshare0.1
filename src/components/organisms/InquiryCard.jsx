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
                <dt>タイトル</dt>
                <dd>{inquiry.title}</dd>
                <dt>こんな人を探しています</dt>
                <dd>{inquiry.features}</dd>
                {/* <dt>依頼内容</dt>
                <dd>{inquiry.inquiry}</dd>
                <dt>質問したい内容</dt>
                <dd>{inquiry.question}</dd>
                <dt>想定インタビュー方法</dt>
                <dd>{inquiry.method}</dd>
                <dt>候補日</dt>
                <dd>{inquiry.availability}</dd> */}
                <dt>依頼者名</dt>
                <dd>{inquiry.name}</dd>
                <dt>メールアドレス</dt>
                <dd>{inquiry.mail}</dd>
                <dt>部署名</dt>
                <dd>{inquiry.department}</dd>
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
    }
    dd{
        padding-left: 80px;
        padding-bottom: 8px;
        overflow-wrap: break-word;
    }
`