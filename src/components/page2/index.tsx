import { form2DefaultValues } from "./controls-data";
import { Form2 } from "./test-form";

export function Page2_Form() {
    return (
        <div className="flex items-center justify-center">
            <Form2 defaultValues={form2DefaultValues} />
        </div>
    );
}
