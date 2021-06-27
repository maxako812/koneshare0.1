
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Answer } from "../components/pages/Answer"
import { InquiryList } from "../components/pages/InquiryList"
import { Top } from "../components/pages/Top"
import { DefaultLayout } from "../components/templates/DefaultLayout"
import { HeaderOnly } from "../components/templates/HeaderOnly"


export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HeaderOnly>
                        <Top />
                    </HeaderOnly>
                </Route>
                <Route path="/inquirylist">
                    <HeaderOnly>
                        <InquiryList />
                    </HeaderOnly>
                </Route>
                <Route path="/answer">
                    <HeaderOnly>
                        <Answer/>
                    </HeaderOnly>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}