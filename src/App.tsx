import { Page1_Form } from "./components/page1SimplestForm";
import { Page2_Form } from "./components/page2";

export function App() {
    return (
        <div className="min-h-screen flex justify-center bg-yellow-200">
            <div className="bg-green-500 w-8"></div>
            <Page2_Form />
        </div>
    );
}
