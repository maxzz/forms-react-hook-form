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

            <input className="px-4 py-2 rounded" defaultValue="test" {...register("example")} />

            <div className="grid">
                <input className="px-4 py-2 rounded" {...register("exampleRequired", { required: true })} />

                <span className={classNames(
                    "text-xs pb-4 text-red-500",
                    !errors.exampleRequired && 'invisible',
                )}>This field is required</span>
            </div>

            <input className="place-self-center px-2 py-2 border-slate-400 border rounded" type="submit" />
        </form>
    );
}

export function Page1_Form() {
    return (
        <div className="px-4 py-3 w-[420px] bg-yellow-300">
            <Form />
        </div>
    );
}
