import { RecoilRoot } from "recoil";
import { Header } from "../components/header"
import { Form } from "../components/form"
import { TodoListStats } from "../components/TodoListStats"
import { TodoListFilters } from "../components/TodoListFilters";
import { List } from "../components/list";
import { Suspense, useEffect } from "react";
// import { todoListState } from "../state/recoil/atoms"
// import { useRecoilState } from "recoil";


export default function Home() {

    // const [state, setState] = useRecoilState(todoListState);

    return (
        <>
            <RecoilRoot>
                <Header />
                {/* <Suspense fallback={<h1>Loading...</h1>}> */}
                <TodoListStats />
                <TodoListFilters />
                <Form />
                <List />
                {/* </Suspense> */}
            </RecoilRoot>
        </>
    )
}
