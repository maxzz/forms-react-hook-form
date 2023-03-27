import { defaultValues } from "./controls-data";
import { TestForm2 } from "./test-form";

export function Page2_Form() {
    return (
        <div className="flex items-center justify-center">
            <TestForm2 defaultValues={defaultValues} />
        </div>
    );
}
