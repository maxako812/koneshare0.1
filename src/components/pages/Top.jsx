import React, { useState } from "react";
import { useForm } from "react-hook-form"
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";
import { TextArea } from "../atoms/input/TextArea";
import { Label } from "../atoms/label/Label";
import { db } from "../../firebase"
import firebase from "firebase/app"


export const Top = () => {

    //バリデーションを実装するためにreact-hook-formを使ってみる
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    //useStateで各入力値を保持する
    const [title, setTitle] = useState("");
    const [features, setFeatures] = useState("");
    const [inquiry, setInquiry] = useState("");
    const [question, setQuestion] = useState("");
    const [method, setMethod] = useState("");
    const [availability, setAvailability] = useState("");
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [department, setDepartment] = useState("");


    const onChangeTitle = ((e) => {
        setTitle(e.target.value)
    })

    const onChangeFeatures = ((e) => {
        setFeatures(e.target.value)
    })
    const onChangeInquiry = ((e) => {
        setInquiry(e.target.value)
    })

    const onChangeQuestion = ((e) => {
        setQuestion(e.target.value)
    })
    const onChangeMethod = ((e) => {
        setMethod(e.target.value)
    })
    const onChangeAvailability = ((e) => {
        setAvailability(e.target.value)
    })

    const onChangeName = ((e) => {
        setName(e.target.value)
    })
    const onChangeMail = ((e) => {
        setMail(e.target.value)
    })
    const onChangeDepartment = ((e) => {
        setDepartment(e.target.value)
    })

    const onSubmit = (e) => {
        //　★ここの意味がよくわからなん
        // e.preventDefault();

        db.collection("inquiry").add({
            title: title,
            features: features,
            inquiry: inquiry,
            question: question,
            method: method,
            availability: availability,
            name: name,
            mail: mail,
            department: department,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <Label>依頼タイトル
                <Input placeholder="○○をしている方にインタビューさせてください" value={title} onChange={onChangeTitle} ref={register} />
            </Label>
            <br />
            <br />
            <Label>こんな人を探しています
                <Input placeholder="社内でサブスクシステムの請回収システム構築の経験がある方" value={features} onChange={onChangeFeatures} ref={register} />
            </Label>
            <br />
            <br />
            <Label>依頼内容
                <TextArea placeholder="○○をしている方にインタビューさせてください" value={inquiry} onChange={onChangeInquiry} ref={register} />
            </Label>
            <br />
            <br />
            <Label>質問したい内容
                <TextArea placeholder="業務の流れ、ワークショップにおいて大切にしていることなど" value={question} onChange={onChangeQuestion} ref={register} />
            </Label>
            <br />
            <br />
            <Label>想定インタビュー方法
                <Input placeholder="Teams会議を想定" value={method} onChange={onChangeMethod} ref={register} /></Label>
            <br />
            <br />
            <Label>候補日
                <Input placeholder="2021/04/19までの間" value={availability} onChange={onChangeAvailability} ref={register} /></Label>
            <br />
            <br />
            <Label>依頼者名<Input placeholder="おきなわたろう" value={name} onChange={onChangeName} ref={register} /></Label>
            <br />
            <br />
            <Label>メールアドレス<Input placeholder="test＠xxxx.com" value={mail} onChange={onChangeMail} ref={register} /></Label>
            <br />
            <br />
            <Label>部署名
                <Input placeholder="デジタルサービス部" value={department} onChange={onChangeDepartment} ref={register} /></Label>

            <PrimaryButton>公募する</PrimaryButton>

        </form>
    )
}