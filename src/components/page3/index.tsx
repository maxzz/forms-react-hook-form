import { ReactPortal } from '../page2-shared';
import { classNames } from "@/utils";
import { appUi, useSnapshot } from "@/store";
import { Form3Inputs } from "./controls-data";
import { Form2 } from "../page2-shared/test-form";

export function Page3_Form() {
    const store = useSnapshot(appUi);

    function onClose() {
        appUi.page3open = !store.page3open;
    }

    function onSave(data: Form3Inputs) {
        appUi.form3Inputs = data;
        onClose();
    }

    return (
        <div className="flex items-center justify-center pointer-events-auto">
            <div className="self-start z-10">
                <button
                    className="mx-4 mt-4 px-4 py-2 bg-gray-500/20 border-gray-500/50 border rounded shadow select-none active:scale-y-95"
                    onClick={onClose}
                >{appUi.page3open ? "Opened" : "Open"}</button>
            </div>

            {appUi.page3open &&
                <ReactPortal>
                    <div className={classNames("h-full")}>
                        <div className="fixed inset-0 z-40">
                            <Form2 defaultValues={store.form3Inputs as Form3Inputs} onClose={onClose} onSave={onSave} />
                        </div>
                    </div>
                </ReactPortal>
            }
        </div>
    );
}
