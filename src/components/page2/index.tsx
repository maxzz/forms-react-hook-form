import { defaultValues } from "./controls-data";
import { TestForm2 } from "./test-form";

export function Page2_Form() {
    return (
        <div className="flex items-center justify-center text-yellow-900 bg-yellow-300">
            <TestForm2 defaultValues={defaultValues} />
        </div>
    );
}
