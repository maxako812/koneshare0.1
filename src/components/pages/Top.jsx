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
        const title = JSON.stringify(data.title);
        const features = JSON.stringify(data.features)
        const inquiry = JSON.stringify(data.inquiry)
        const question = JSON.stringify(data.question)
        const method = JSON.stringify(data.method)
        const availability = JSON.stringify(data.availability)
        const name = JSON.stringify(data.name)
        const department = JSON.stringify(data.department)


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
        //firebaseに登録処理
        db.collection("inquiry").add(database);
    }

    return (

        <SDiv>
            <br/>
            <br/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Label>依頼タイトル
                <Input placeholder="○○をしている方にインタビューさせてください"  {...register('title', { required: true })} />
                    {errors.title && errors.title.type === "required" && <Span>※必須入力項目です</Span>}
                </Label>
                <br />
                <br />
                <Label>こんな人を探しています
                <Input placeholder="社内でサブスクシステムの請回収システム構築の経験がある方" {...register('features', { required: true })} />
                    {errors.features && errors.features.type === "required" && <Span>※必須入力項目です</Span>}
                </Label>
                <br />
                <br />
                <Label>依頼内容
                <TextArea placeholder="○○をしている方にインタビューさせてください" {...register('inquiry')} />
                </Label>
                <br />
                <br />
                <Label>質問したい内容
                <TextArea placeholder="業務の流れ、ワークショップにおいて大切にしていることなど" {...register('question')} />
                </Label>
                <br />
                <br />
                <Label>想定インタビュー方法
                <Input placeholder="Teams会議を想定" {...register('method')} />
                </Label>
                <br />
                <br />
                <Label>候補日
               <Input placeholder="2021/04/19までの間" {...register('availability')} />
                </Label>
                <br />
                <br />
                <Label>依頼者名
                <Input placeholder="おきなわたろう" {...register('name')} />
                </Label>
                <br />
                <br />
                <Label>メールアドレス
                {/* メール情報のみログイン情報から抽出して編集不可にする */}
                    <Input value={userMail} readonly />
                </Label>
                <br />
                <br />
                <Label>部署名
                <Input placeholder="デジタルサービス部" {...register('department')} />
                </Label>
<br/>

                <PrimaryButton>相談する</PrimaryButton>
            </form>
        </SDiv>
    )
}

const SDiv = styled.div`
    /* display:flex;
    align-items: center;
  justify-content: center */
`