import { Form2Inputs } from "./controls-data";
import { appUi, useSnapshot } from "@/store";
import { Form2 } from "./test-form";

export function Page2_Form() {
    const store = useSnapshot(appUi);

    function onSave(data: Form2Inputs) {
        appUi.form2Inputs = data;
    }

    return (
        <div className="flex items-center justify-center">
            <Form2 defaultValues={store.form2Inputs} onSave={onSave} />
        </div>
    );
}
