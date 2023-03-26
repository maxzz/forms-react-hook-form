import { useForm } from "react-hook-form";
import { classNames } from '../../utils/classnames';
import { Input, Select, Radio, Button, ReactPortal } from '../page2/controls';
import { defaultValues } from "../page2/controls-data";
import { TestForm2 } from "../page2/test-form";

export function Page3_Form() {
    return (
        <div className="flex items-center justify-center text-yellow-900 bg-yellow-300">
            <ReactPortal>
                <TestForm2 defaultValues={defaultValues} />
            </ReactPortal>
        </div>
    );
}
