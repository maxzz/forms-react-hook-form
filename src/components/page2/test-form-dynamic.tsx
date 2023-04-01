import { UseFormRegister, FieldErrors, Control, useFieldArray } from "react-hook-form";
import { Form2Inputs } from "./controls-data";

export function GroupDynamicFields({ register, errors, control }: { register: UseFormRegister<Form2Inputs>; errors: FieldErrors<Form2Inputs>; control: Control<Form2Inputs, any>; }) {
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'fields',
    });
    return (<>
        {fields.map((field, idx) => (
            <div className="flex" key={field.id}>
                <input className="w-24" {...register(`fields.${idx}.disp`)} />
                <input className="w-24" {...register(`fields.${idx}.value`)} />
                <input className="w-24" {...register(`fields.${idx}.type`)} />
                <button
                    onClick={() => {
                        remove(idx);
                    }}
                >x</button>
            </div>
        ))}
        <button
            className="px-2 py-1 border-gray-900/20 border rounded scale-y-95"
            onClick={() => {
                append({
                    disp: 'disp',
                    type: 'psw',
                    value: 'now',
                });
            }}
        >Add Field</button>
    </>);
}
