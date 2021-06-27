import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase"
import { InquiryCard } from "../organisms/InquiryCard";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const InquiryList = () => {

    const [inquiries, setInquiries] = useState([
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
        },
    ]);


    useEffect(() => {
        const firebaseData = db
            .collection("inquiry")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) =>
                setInquiries(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        title: doc.data().title,
                        features: doc.data().features,
                        inquiry: doc.data().inquiry,
                        question: doc.data().question,
                        method: doc.data().method,
                        availability: doc.data().availability,
                        name: doc.data().name,
                        mail: doc.data().mail,
                        department: doc.data().department,
                    }))
                ));

        return () => {
            firebaseData();
        };
    }, [])

    return (
        <SContainer>
            <div>
                公募一覧
        </div>
            <hr />
            <SInquiryArea>
                {inquiries.map((inquiry) => (
                    <InquiryCard key={inquiries.id} inquiry={inquiry} />
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