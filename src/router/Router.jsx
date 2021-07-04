
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Answer } from "../components/pages/Answer"
import { InquiryList } from "../components/pages/InquiryList"
import { Top } from "../components/pages/Top"
import  Login  from "../components/pages/Login"
import { DefaultLayout } from "../components/templates/DefaultLayout"
import { HeaderOnly } from "../components/templates/HeaderOnly"
import {PrivateRoute} from "./PrivateRoute"
import SignUp from "../components/pages/SignUp"


export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <PrivateRoute exact path="/">
                    <HeaderOnly>
                        <Top />
                    </HeaderOnly>
                </PrivateRoute>

                <PrivateRoute path="/inquirylist">
                    <HeaderOnly>
                        <InquiryList />
                    </HeaderOnly>
                </PrivateRoute>
                <PrivateRoute path="/answer">
                    <HeaderOnly>
                        <Answer />
                    </HeaderOnly>
                </PrivateRoute>
            </Switch>
        </BrowserRouter>
    )
}