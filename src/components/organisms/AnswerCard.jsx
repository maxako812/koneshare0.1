import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Card } from "../atoms/card/Card";

export const AnswerCard = (props) => {
    const { answer } = props;
    // const history = useHistory();
    // console.log(inquiry.id);

    return (
        <Card>
            <SDl>
                <dt>回答者名</dt>
                <dd>{answer.name}</dd>
                <dt>回答内容</dt>
                <dd>{answer.answer}</dd>
                {/* <dt>依頼内容</dt>
                <dd>{inquiry.inquiry}</dd>
                <dt>質問したい内容</dt>
                <dd>{inquiry.question}</dd>
                <dt>想定インタビュー方法</dt>
                <dd>{inquiry.method}</dd>
                <dt>候補日</dt>
                <dd>{inquiry.availability}</dd> */}
                {/* <dt>依頼者名</dt>
                <dd>{inquiry.name}</dd>
                <dt>メールアドレス</dt>
                <dd>{inquiry.mail}</dd>
                <dt>部署名</dt>
                <dd>{inquiry.department}</dd> */}
                <dt>投稿日時</dt>
                <dd>{new Date(answer.timestamp?.toDate()).toLocaleString()}</dd>
                {/* <dt>ID</dt>
                <dd>{inquiry.id}</dd> */}

            </SDl>
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