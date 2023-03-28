import { Page1_Form } from "./components/page1SimplestForm";
import { Page2_Form } from "./components/page2";
import { Page3_Form } from "./components/page3";

export function App() {
    return (
        <div className="min-h-screen grid grid-cols-[minmax(0,400px)_2rem_auto_2fr] bg-yellow-200">
            <div className="">menu</div>
            <div className="col-start-2 bg-green-500 w-8"></div>
            <Page3_Form />
        </div>
    );
}
