import React, { useContext } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form"
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";
import { TextArea } from "../atoms/input/TextArea";
import { Label } from "../atoms/label/Label";
import { db } from "../../firebase"
import firebase from "firebase/app"
import { Span } from "../atoms/input/Span";
import { UserContext } from "../../providers/UserProvider";
import { Logout } from "../molecules/Logout";


export const Top = () => {

    //バリデーションを実装するためにreact-hook-formを使ってみる
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    //ログイン情報からメール情報を取り出す
    const context = useContext(UserContext);
    const userMail = context.userInfo.email;


    //相談ボタン押下時の登録処理
    const onSubmit = (data) => {

        //データの型をStringに変換
        /*
        const title = JSON.stringify(data.title);
        const features = JSON.stringify(data.features)
        const inquiry = JSON.stringify(data.inquiry)
        const question = JSON.stringify(data.question)
        const method = JSON.stringify(data.method)
        const availability = JSON.stringify(data.availability)
        const name = JSON.stringify(data.name)
        const department = JSON.stringify(data.department)

        console.log (name);


        const database = {
            title: title,
            features: features,
            inquiry: inquiry,
            question: question,
            method: method,
            availability: availability,
            name: name,
            mail: userMail,　//メールはログイン情報から取得したものをそのままセット
            department: department,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        }
        */
       var database = data;
       database.mail = userMail;
       database.timestamp = firebase.firestore.FieldValue.serverTimestamp();
        //firebaseに登録処理
        db.collection("inquiry").add(database);
    }

    return (

        <SContainer>
            <br/>
            <br/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <SUl>
                    <SLi>
                        <Label>依頼タイトル</Label>
                        <Input placeholder="新規サブスクシステム構築について"  {...register('title', { required: true })} />
                        {errors.title && errors.title.type === "required" && <Span>※必須入力項目です</Span>}
                    </SLi>
                    <SLi>
                        <Label>こんな人を探しています</Label>
                        <Input placeholder="社内でサブスクシステムの請回収システム構築の経験がある方" {...register('features', { required: true })} />
                        {errors.features && errors.features.type === "required" && <Span>※必須入力項目です</Span>}
                    </SLi>

                    <SLi>
                        <Label>相談したい内容</Label>
                        <TextArea placeholder="現在マーケティング部にて新規サブスクシステムの事業検討をしています。構築手順や業務フローなどを相談させてください。" {...register('inquiry')} />
                    </SLi>
                    {/* <SLi>
                        <Label>質問したい内容</Label>
                        <TextArea placeholder="業務の流れ、ワークショップにおいて大切にしていることなど" {...register('question')} />
                    </SLi> */}
                    <SLi>
                        <Label>希望回答方法</Label>
                        <Input placeholder="Teams会議で30分程度お時間をください" {...register('method')} />
                    </SLi>
                    <SLi>
                        <Label>候補日</Label>
                        <Input placeholder="2021/04/19までの間" {...register('availability')} />
                    </SLi>
                    <SLi>
                        <Label>依頼者名</Label>
                        <Input placeholder="おきなわたろう" {...register('name')} />
                    </SLi>
                    <SLi>
                        <Label>メールアドレス</Label>
                        {/* メール情報のみログイン情報から抽出して編集不可にする */}
                        <Input value={userMail} readonly />
                    </SLi>
                    <SLi>
                        <Label>部署名</Label>
                        <Input placeholder="マーケティング部" {...register('department')} />
                    </SLi>
                    <SLi>
                        <PrimaryButton>相談する</PrimaryButton>
                    </SLi>
                </SUl>
            </form>
        </SContainer>
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
