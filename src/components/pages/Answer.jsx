import React, { useContext } from "react";
import { Input } from "../atoms/input/Input"
import { Label } from "../atoms/label/Label"
import { useForm } from "react-hook-form"
import { db } from "../../firebase"
import firebase from "firebase/app"
import { TextArea } from "../atoms/input/TextArea"
import { PrimaryButton } from "../atoms/button/PrimaryButton"
import { useLocation } from "react-router-dom"
import { UserContext } from "../../providers/UserProvider";
import { Span } from "../atoms/input/Span";
import styled from "styled-components";


export const Answer = () => {

    //相談IDをstateで受け取る。
    const { state } = useLocation();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    //ログイン情報からメール情報を取り出す
    const context = useContext(UserContext);
    const userMail = context.userInfo.email;

    //回答ボタン押下時の登録処理
    const onSubmit = (data) => {

        //データの型をStringに変換
        // const name = JSON.stringify(data.name);
        // const answer = JSON.stringify(data.answer);

        // const database = {
        //     name: name,
        //     mail: userMail,
        //     answer: answer,
        //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        // }

        var database = data;
        database.mail = userMail;
        database.timestamp = firebase.firestore.FieldValue.serverTimestamp();

        db.collection("inquiry").doc(state.inquiryId).collection("answer").add(database);

        // firebaseのdbにアクセスをしてデータを登録します
        // // state.inquiryIdに紐づいた先に回答を紐付ける
        // db.collection("inquiry").doc(state.inquiryId).collection("answer").add({
        //     name: name,
        //     mail: mail,
        //     answer: answer,
        //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        // });
        // 送信のボタンが押されたら入力欄を空にしたい
        // setAnswer("");
        alert("送信完了しました")
    }

    return (
        <SContainer>
            <br/>
            <br/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <SUl>
                    <SLi>
                        <Label>回答者名</Label>
                        <Input placeholder="おおさかたろう" {...register('name', { required: true })} />
                        {errors.name && errors.name.type === "required" && <Span>※必須入力項目です</Span>}

                    </SLi>
                    <SLi>
                        <Label>メールアドレス</Label>
                    {/* ログイン情報よりメールアドレスを取得 */}
                        <Input value={userMail} readonly />
                    </SLi>
                    <SLi>
                        <Label>回答内容</Label>
                        {/* <TextArea placeholder="何日なら可能です。" value={answer}
                    onChange={onChangeAnswer} ref={register} /> */}
                        <TextArea placeholder="○○事業部にて新規事業を検討していました。何日ならTeams設定可能です" {...register('answer', { required: true })} />
                        {errors.answer && errors.answer.type === "required" && <Span>※必須入力項目です</Span>}
                    </SLi>
                    <SLi>
                        <PrimaryButton>回答する</PrimaryButton>
                    </SLi>
                </SUl>
            </form>
        </SContainer >
    )

}

const SContainer = styled.div`
   text-align:center;
   margin:0 auto;

`

const SLi = styled.li`
    list-style: none;
    margin-bottom: 40px;
`
const SUl = styled.ul`
    width: 500px;
    margin: 0 auto;
    `