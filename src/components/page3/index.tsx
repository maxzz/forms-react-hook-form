import { ReactPortal } from '../page2/controls';
import { classNames } from "@/utils";
import { appUi, useSnapshot } from "@/store";
import { defaultValues, Inputs } from "../page2/controls-data";
import { TestForm2 } from "../page2/test-form";

export function Page3_Form() {
    const store = useSnapshot(appUi);

    function onSave(data: Inputs) {
        console.log('dialog data', JSON.stringify(data, null, 4));
        appUi.page3open = !store.page3open;
    }

    function onClose() {
        appUi.page3open = !store.page3open;
    }

    return (
        <div className="flex items-center justify-center pointer-events-auto">
            <div className="self-start z-10">
                <button
                    className="mx-4 mt-4 px-4 py-2 bg-gray-500/20 border-gray-500/50 border rounded shadow select-none active:scale-y-95"
                    onClick={onClose}
                >{appUi.page3open ? "Opened" : "Open"}</button>
            </div>

            <ReactPortal>
                <div className={classNames("h-full", !appUi.page3open && "hidden")}>
                    <div className="fixed inset-0 z-[1040]">
                        <TestForm2 defaultValues={defaultValues} onSave={onSave} onClose={onClose} />
                    </div>
                </div>
            </ReactPortal>
        </div>
    );
}
