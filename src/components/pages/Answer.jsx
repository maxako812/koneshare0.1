import { Input } from "../atoms/input/Input"
import { Label } from "../atoms/label/Label"
import { useForm } from "react-hook-form"
import { db } from "../../firebase"
import firebase from "firebase/app"
import { useState } from "react"
import { TextArea } from "../atoms/input/TextArea"
import { PrimaryButton } from "../atoms/button/PrimaryButton"
import { useLocation } from "react-router-dom"

export const Answer = (props) => {

    //相談IDをpropsで受け取る
    const { inquiryId } = props;
    const { state } = useLocation();
    console.log(state);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [answer, setAnswer] = useState("");

    const onChangeName = ((e) => {
        setName(e.target.value)
    })

    const onChangeMail = ((e) => {
        setMail(e.target.value)
    })
    const onChangeAnswer = ((e) => {
        setAnswer(e.target.value)
    })


    //回答内容の登録処理
    const onSubmit = (e) => {
        // formタグを使う時,送信のtype=submitを使うとページがリロードされるので、リロードの処理を無効にしましょう🤗
        // e.preventDefault();

        // firebaseのdbにアクセスをしてデータを登録します
        // doc()これがポイント！
        db.collection("inquiry").doc(inquiryId).collection("answer").add({
            name: name,
            mail: mail,
            answer: answer,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        // 送信のボタンが押されたら入力欄を空にしたいのでsetComment("")を使う
        setAnswer("");
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Label>回答者名
                <Input placeholder="おおさかたろう" value={name}
                    onChange={onChangeName} ref={register} />
            </Label>
            <Label>メールアドレス
                <Input placeholder="test@test.com" value={mail}
                    onChange={onChangeMail} ref={register} />
            </Label>
            <Label>回答内容
                <TextArea placeholder="何日なら可能です。" value={answer}
                    onChange={onChangeAnswer} ref={register} />
            </Label>
            <PrimaryButton>回答する</PrimaryButton>
        </form>
    )

}