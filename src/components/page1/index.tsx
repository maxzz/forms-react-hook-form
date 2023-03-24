import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { classNames } from '../../utils/classnames';

type Inputs = {
    example: string,
    exampleRequired: string,
};

const defaultValues: Inputs = {
    example: '123',
    exampleRequired: 'required'
};

function Form() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({ defaultValues });

    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    console.log(watch("example"));

    return (
        <form className="grid gap-y-2" onSubmit={handleSubmit(onSubmit)}>

            <input defaultValue="test" {...register("example")} />

            <div className="grid">
                <input {...register("exampleRequired", { required: true })} />

                <span className={classNames(
                    "text-xs pb-4 text-red-500",
                    !errors.exampleRequired && 'invisible',
                )}>This field is required</span>
            </div>

            <input className="px-2 py-1 border-slate-400 border rounded" type="submit" />
        </form>
    );
}

export function Page1_Form() {
    return (
        <div className="px-4 py-3 max-w-[420px]">
            <Form />
        </div>
    );
}
