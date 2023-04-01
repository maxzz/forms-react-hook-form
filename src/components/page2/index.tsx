import { Form2Inputs } from "./controls-data";
import { appUi, useSnapshot } from "@/store";
import { Form2 } from "./test-form";

export function Page2_Form() {
    const store = useSnapshot(appUi);

    function onSave(data: Form2Inputs) {
        appUi.form2Inputs = data;
    }

    //console.log('appUi', appUi.form2Inputs);

    return (
        <div className="flex items-center justify-center">
            <Form2 defaultValues={store.form2Inputs as Form2Inputs} onSave={onSave} />
        </div>
    );
}
