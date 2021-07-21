import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase"
import { useHistory, useLocation } from "react-router-dom"
import { InquiryDetailCard } from "../organisms/InquiryDetailCard";
import { AnswerCard } from "../organisms/AnswerCard";
import { PrimaryButton } from "../atoms/button/PrimaryButton";


//詳細ボタンを押された相談のIDに基づいて検索を行う
export const DetailInquiryList = () => {

    //相談IDを受け取る
    const { state } = useLocation();
    const inquiryId = state.inquiryId;
    const history = useHistory();


    const [inquiry, setInquiry] = useState(
        {
            id: "",
            title: "",
            features: "",
            inquiry: "",
            question: "",
            method: "",
            availability: "",
            name: "",
            mail: "",
            department: "",
            timestamp: null,
        },
    );


    useEffect(() => {
        db.collection("inquiry")
            .doc(inquiryId)
            .get()
            .then(
                doc => {
                    const data = doc.data();
                    setInquiry(data)
                }
            )
    }, [inquiryId]);

    // 回答するボタンの挙動
    const onClickAnswer = () => {
        history.push({ pathname: "/answer", state: { inquiryId: inquiryId } });
    };


    //ここから回答がある場合の取得
    const [answers, setAnswers] = useState([
        {
            id: "",
            name: "",
            mail: "",
            answer: "",
            timestamp: null,
        }
    ])

    useEffect(() => {
        const firebaseData = db
            .collection("inquiry")
            // ポイントです！
            .doc(inquiryId)
            .collection("answer")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) =>
                setAnswers(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        name: doc.data().name,
                        answer: doc.data().answer,
                        timestamp: doc.data().timestamp,
                    }))
                )
            );
        return () => {
            firebaseData();
        };
    }, [inquiryId]);



    return (
        <SContainer>
            <div>
                相談内容
            </div>
            <hr />
            <SInquiryArea>
                <InquiryDetailCard
                    inquiry={inquiry}
                    InquiryId={inquiryId}
                />

                <PrimaryButton onClick={onClickAnswer}>回答する</PrimaryButton>
                <br />
                {answers &&
                    answers.map((answer) => (
                        <AnswerCard
                            key={answers.id}
                            answer={answer} />
                    ))}
            </SInquiryArea>
        </SContainer>

    )

}

const SContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    padding:24px;
`

const SInquiryArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display:grid;
    grid-template-columns: repeat (auto-fit, minmax(200px, 1fr));
    grid-gap:20px;
`;
