import { defaultValues, Inputs } from "../page2/controls-data";
import { TestForm2 } from "../page2/test-form";
import { ReactPortal } from '../page2/controls';
import { useState } from "react";
import { classNames } from "../../utils/classnames";

export function Page3_Form() {
    const [open, setOpen] = useState(false);

    function onSave(data: Inputs) {
        console.log('dialog data', JSON.stringify(data, null, 4));
        setOpen((p) => !p);
    }

    function onClose() {
        setOpen((p) => !p);
    }

    return (
        <div className="flex items-center justify-center pointer-events-auto">
            <div className="self-start  z-10">
                <button
                    className="mx-4 mt-4 px-4 py-2 bg-gray-500/20 border-gray-500/50 border rounded shadow select-none active:scale-y-95"
                    onClick={onClose}
                >{open ? "Close" : "Open"}</button>
            </div>

            <ReactPortal>
                <div className={classNames("h-full", !open && "hidden")}>
                    {/* <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[1040]">             */}
                    <div className="fixed inset-0 z-[1040]">
                        <TestForm2 defaultValues={defaultValues} onSave={onSave} onClose={onClose} />
                    </div>
                </div>
            </ReactPortal>
        </div>
    );
}

// export function Page3_Form() {
//     const [open, setOpen] = useState(false);

//     function onSave(data: Inputs) {
//         console.log('dialog data', JSON.stringify(data, null, 4));
//         setOpen((p) => !p);
//     }

//     function onClose() {
//         setOpen((p) => !p);
//     }

//     return (
//         // <div className="absolute w-full h-full inset-0 left-0 top-0 grid">
//             <div className="flex items-center justify-center pointer-events-auto">
//                 <div className="self-start  z-10">
//                     <button
//                         className="mx-4 mt-4 px-4 py-2 bg-gray-500/20 border-gray-500/50 border rounded shadow select-none active:scale-y-95"
//                         onClick={onClose}
//                     >{open ? "Close" : "Open"}</button>
//                 </div>

//                 <ReactPortal>
//                     <div className={classNames("h-full", !open && "hidden")}>
//                         <TestForm2 defaultValues={defaultValues} onSave={onSave} onClose={onClose} />
//                     </div>
//                 </ReactPortal>
//             </div>
//         // </div>
//     );
// }
