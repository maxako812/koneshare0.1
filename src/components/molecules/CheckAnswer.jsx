import React, { useContext, useState, useEffect } from "react";
import { db } from "../../firebase"
import { UserContext } from "../../providers/UserProvider";
import { InquiryCard } from "../organisms/InquiryCard";



export const CheckAnswer = () => {

    //ログイン情報からメールアドレスを取得
    const context = useContext(UserContext);
    const userMail = context.userInfo.email;
    // console.log(userMail);

    //メールアドレスに紐づく相談IDの抽出
    const [myIds, setMyIds] = useState([{
        inquiryId: "",
        inquiryTitle: "",
    }])


    useEffect(() => {
        const firebaseData = db
            .collection("inquiry")
            .where("mail", "==", userMail)
            .onSnapshot((snapshot) =>
                setMyIds(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        // title: doc.data().title,
                        // features: doc.data().features,
                        // inquiry: doc.data().inquiry,
                        // question: doc.data().question,
                        // method: doc.data().method,
                        // availability: doc.data().availability,
                        // name: doc.data().name,
                        // mail: doc.data().mail,
                        // department: doc.data().department,
                        // timestamp: doc.data().timestamp,
                    }))
                ));

        return () => {
            firebaseData();
        };
    }, [userMail]);

    //myIdがとれることは確認
    console.log(myIds, "firebaseの中身");
    console.log(myIds.id);

    //idに紐づく回答が存在するかどうかを確認
    const [answer, setAnswer] = useState ("");

    //ここの編集をする
    // useEffect(() => {
    //     const firebaseData = db
    //       .collection("posts")
    //       // ポイントです！
    //       .doc(postId)
    //       .collection("comment")
    //       .orderBy("timestamp", "desc")
    //       .onSnapshot((snapshot) =>
    //         setComments(
    //           snapshot.docs.map((doc) => ({
    //             id: doc.id,
    //             text: doc.data().text,
    //             timestamp: doc.data().timestamp,
    //           }))
    //         )
    //       );
    //     return () => {
    //       firebaseData();
    //     };
    //   }, [postId]);





    return (
        <div>

            {myIds &&
            myIds.map((inquiry) => (
                <InquiryCard
                    inquiryId={myIds.id}
                    key={myIds.id}
                    // ここがなぜ{inquiry}で{inquiries}じゃないのか考えてみる。
                    inquiry={inquiry} />

            ))}
            {/* {myIds &&
                myIds.map((myid) => (
                    <p>
                        {myid.id} */}
            {/* {answer.text} */}
            {/* {new Date(answer.timestamp?.toDate()).toLocaleString()} */}
            {/* </p> 
                ))}*/}
            {/* {myAnswers &&
            myAnswers.map((answer) => (
              <p>
                {answer.mail}
                {answer.text}
                {new Date(answer.timestamp?.toDate()).toLocaleString()}
              </p>
            ))} */}
        </div>
    )
}

