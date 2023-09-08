import { Fragment } from "react";
import Status from "./Status";
import Posts from "./Posts";
import Header from "./Header";

export default function Index() {
    return (
        <Fragment>
            <main class="w-full sm:w-5/6 md:w-2/3 lg:w-1/2 m-auto mb-[105px] pt-10 font-inter border-slate-900 border-opacity-20">
                <Header />
                <Status />
                <Posts />
            </main>
        </Fragment>
    )
}