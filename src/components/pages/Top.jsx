import React from "react";
import { useForm } from "react-hook-form"
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";
import { TextArea } from "../atoms/input/TextArea";
import { Label } from "../atoms/label/Label";
import { db } from "../../firebase"
import firebase from "firebase/app"
import { Span } from "../atoms/input/Span";


export const Top = () => {

    //バリデーションを実装するためにreact-hook-formを使ってみる
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

 
    const onSubmit = (data) => {

        //データの型をStringに変換
        const title = JSON.stringify(data.title);
        const features = JSON.stringify(data.features)
        const inquiry = JSON.stringify(data.inquiry)
        const question = JSON.stringify(data.question)
        const method = JSON.stringify(data.method)
        const availability = JSON.stringify(data.availability)
        const name = JSON.stringify(data.name)
        const mail = JSON.stringify(data.mail)
        const department = JSON.stringify(data.department)

        // console.log(data);
        // console.log(typeof(data));
        // console.log(availability);
        // console.log(typeof(availability));
        // console.log(typeof(mail));

        
        const database = {
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
        }
        db.collection("inquiry").add(database);
    }

    return (

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

                {/* <Input placeholder="社内でサブスクシステムの請回収システム構築の経験がある方" value={features} onChange={onChangeFeatures} ref={register} /> */}
            </Label>
            <br />
            <br />
            <Label>依頼内容
                <TextArea placeholder="○○をしている方にインタビューさせてください" {...register('inquiry')} />
                {/* <TextArea placeholder="○○をしている方にインタビューさせてください" value={inquiry} onChange={onChangeInquiry} ref={register} /> */}
            </Label>
            <br />
            <br />
            <Label>質問したい内容
                <TextArea placeholder="業務の流れ、ワークショップにおいて大切にしていることなど" {...register('question')} />
                {/* <TextArea placeholder="業務の流れ、ワークショップにおいて大切にしていることなど" value={question} onChange={onChangeQuestion} ref={register} /> */}
            </Label>
            <br />
            <br />
            <Label>想定インタビュー方法
                <Input placeholder="Teams会議を想定" {...register('method')} />
            </Label>

            {/* <Input placeholder="Teams会議を想定" value={method} onChange={onChangeMethod} ref={register} /></Label> */}
            <br />
            <br />
            <Label>候補日
               <Input placeholder="2021/04/19までの間" {...register('availability')} />
                {/* <Input placeholder="2021/04/19までの間" value={availability} onChange={onChangeAvailability} ref={register} /> */}
            </Label>
            <br />
            <br />
            <Label>依頼者名
                <Input placeholder="おきなわたろう" {...register('name')} />
                {/* <Input placeholder="おきなわたろう" value={name} onChange={onChangeName} ref={register} /> */}
            </Label>
            <br />
            <br />
            <Label>メールアドレス
                <Input placeholder="test＠xxxx.com" {...register('mail')} />
                {/* <Input placeholder="test＠xxxx.com" value={mail} onChange={onChangeMail} ref={register} /> */}
            </Label>
            <br />
            <br />
            <Label>部署名
                <Input placeholder="デジタルサービス部" {...register('department')} />
                {/* <Input placeholder="デジタルサービス部" value={department} onChange={onChangeDepartment} ref={register} /> */}
            </Label>

            <PrimaryButton>公募する</PrimaryButton>

        </form>
    )
}