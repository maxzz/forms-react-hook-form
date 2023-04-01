import { UseFormRegister, FieldErrors, Control, useFieldArray, UseFormRegisterReturn } from "react-hook-form";
import { Form2Inputs } from "./controls-data";

function Row({ registered, errors, control }: { registered: UseFormRegisterReturn, errors: FieldErrors<Form2Inputs>; control: Control<Form2Inputs, any>; }) {
    return(
        <input className="w-24 rounded" {...registered} />
    )
}

export function GroupDynamicFields({ register, errors, control }: { register: UseFormRegister<Form2Inputs>; errors: FieldErrors<Form2Inputs>; control: Control<Form2Inputs, any>; }) {
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'fields',
    });
    return (<>

        <div className="grid gap-y-1">
            {fields.map((field, idx) => (
                <div className="flex space-x-1" key={field.id}>
                    <Row registered={register(`fields.${idx}.disp`)} errors={errors} control={control} />
                    <Row registered={register(`fields.${idx}.value`)} errors={errors} control={control} />
                    <Row registered={register(`fields.${idx}.type`)} errors={errors} control={control} />

                    {/*                     
                    <input className="w-24 rounded" {...register(`fields.${idx}.disp`)} />
                    <input className="w-24 rounded" {...register(`fields.${idx}.value`)} />
                    <input className="w-24 rounded" {...register(`fields.${idx}.type`)} />
                    */}

                    <button
                        onClick={(event) => {
                            event.preventDefault();
                            remove(idx);
                        }}
                    >x</button>
                </div>
            ))}
        </div>
        
        <button
            className="px-2 py-1 border-gray-900/20 border rounded scale-y-95"
            onClick={(event) => {
                event.preventDefault();
                append({
                    disp: 'disp',
                    type: 'psw',
                    value: 'now',
                });
            }}
        >Add Field</button>
    </>);
}
