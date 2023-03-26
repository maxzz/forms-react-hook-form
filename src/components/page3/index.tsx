import { defaultValues } from "../page2/controls-data";
import { TestForm2 } from "../page2/test-form";
import { ReactPortal } from '../page2/controls';

export function Page3_Form() {
    function onClose() {
        console.log('onClose');
    }
    return (
        <div className="flex items-center justify-center text-yellow-900 bg-yellow-300">
            <ReactPortal>
                <TestForm2 defaultValues={defaultValues} onClose={onClose} />
            </ReactPortal>
        </div>
    );
}
