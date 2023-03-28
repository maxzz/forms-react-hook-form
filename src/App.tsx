import { useSnapshot } from "valtio/react";
import { Menu } from "./components/menu";
import { Page1_Form } from "./components/page1SimplestForm";
import { Page2_Form } from "./components/page2";
import { Page3_Form } from "./components/page3";
import { ActivePage, appUi } from "./store";

export function App() {
    const store = useSnapshot(appUi);
    return (
        <div className="min-h-screen grid grid-cols-[minmax(0,400px)_2rem_auto_2fr] bg-yellow-200">
            <Menu />
            <div className="col-start-2 bg-green-500 w-8"></div>

            {store.activePage === ActivePage.page1 && <Page1_Form />}
            {store.activePage === ActivePage.page2 && <Page2_Form />}
            {store.activePage === ActivePage.page3 && <Page3_Form />}
        </div>
    );
}
