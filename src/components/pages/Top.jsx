import React from "react";
import { useForm } from "react-hook-form"
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";
import { TextArea } from "../atoms/input/TextArea";
import { Label } from "../atoms/label/Label";

export const Top = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <Label>依頼タイトル<Input placeholder="○○をしている方にインタビューさせてください" ref={register} /></Label>
            <br />
            <br />
            <Label>こんな人を探しています
                <Input placeholder="有料でワークショップを実施されている個人事業主の方" />
            </Label>
            <br />
            <br />
            <Label>依頼内容
                <TextArea placeholder="○○をしている方にインタビューさせてください" />
            </Label>
            <br />
            <br />
            <Label>質問したい内容
                <TextArea placeholder="業務の流れ、ワークショップにおいて大切にしていることなど" />
            </Label>
            <br />
            <br />
            <Label>想定インタビュー方法
                <Input placeholder="Teams会議を想定" /></Label>
            <br />
            <br />
            <Label>候補日
                <Input placeholder="2021/04/19までの間" /></Label>
            <br />
            <br />
            <Label>依頼者名<Input placeholder="おきなわたろう" /></Label>
            <br />
            <br />
            <Label>メールアドレス<Input placeholder="test＠xxxx.com" /></Label>
            <br />
            <br />
            <Label>部署名
                <Input placeholder="デジタルサービス部" /></Label>

            <PrimaryButton>公募する</PrimaryButton>

        </form>
    )
}