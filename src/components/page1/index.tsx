import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { classNames } from '../../utils/classnames';

type Inputs = {
    example: string,
    exampleRequired: string,
};

const defaultValues: Inputs = {
    example: '123',
    exampleRequired: ''
};

function Form() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({ defaultValues });

    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    console.log(watch("example"));

    return (
        <form className="p-4 border-yellow-500 border rounded shadow grid gap-y-2" onSubmit={handleSubmit(onSubmit)}>
            <div className="pb-4">Form caption</div>

            <div className="grid">
                <input className="px-4 py-2 rounded" defaultValue="test" {...register("example", { required: true })} />
                <span className={classNames("text-xs text-[red] select-none", !errors.example && 'invisible',)}>This field is required</span>
            </div>

            <div className="grid">
                <input className="px-4 py-2 rounded" {...register("exampleRequired", { required: true })} />
                <span className={classNames("text-xs text-[red] select-none", !errors.exampleRequired && 'invisible',)}>This field is required</span>
            </div>

            <input className="place-self-center mt-4 px-2 py-2 border-yellow-500 border rounded active:scale-y-[.97]" type="submit" />
        </form>
    );
}

export function Page1_Form() {
    return (
        <div className="w-[420px] flex items-center justify-center text-yellow-900 bg-yellow-300">
            <Form />
        </div>
    );
}
