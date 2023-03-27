import { HTMLAttributes } from "react";
import { FieldErrors, useForm, UseFormRegister, UseFormWatch } from "react-hook-form";
import { classNames } from "../../utils/classnames";
import { Input, Select, Radio, Button, DebugDisplay } from "./controls";
import { Inputs, selectOptions } from "./controls-data";

function NamesGroup({ register, errors }: { register: UseFormRegister<Inputs>; errors: FieldErrors<Inputs>; }) {
    return (<>
        <Input registered={register('firstName', { required: 'This field is required' })} errors={errors} />
        <Input registered={register('lastName', { required: 'This field is required' })} errors={errors} />
    </>);
}

function OtherControlsGroup({ register, errors, watch }: { register: UseFormRegister<Inputs>; errors: FieldErrors<Inputs>; watch: UseFormWatch<Inputs>; }) {
    const moreDetail = watch('moreDetails');
    return (<>
        {/* Simple inputs */}

        <NamesGroup register={register} errors={errors} />

        {/* Select */}

        <label className="flex items-center space-x-1 select-none">
            <span>Title</span>
            <Select registered={register('title')} options={selectOptions} />
        </label>

        {/* Radio */}

        <div className="my-2 flex items-center gap-x-4">
            <Radio label="One" value="2" registered={register("radioIn", { required: true })} />
            <Radio label="Two" value="3" registered={register("radioIn", { required: true })} />
        </div>

        {/* Optional fields */}

        <label className="pt-2 flex items-center gap-x-2 select-none">
            <input className="w-5 h-5 accent-yellow-900" type="checkbox" {...register('moreDetails')} />
            <span>More controls..</span>
        </label>

        <div className={classNames(!moreDetail && 'invisible')}>
            <label className="mt-1 grid">
                <span>Optional data</span>
                <input className="px-4 py-2 rounded" {...register('interests')} />
            </label>
        </div>
    </>);
}

function LiveDebugDisplay({ watch, ...rest }: { watch: UseFormWatch<Inputs>; } & HTMLAttributes<HTMLDivElement>) {
    const displayValues = watch();
    return (
        <DebugDisplay displayValues={displayValues} {...rest} />
    );
}

export function TestForm2({ defaultValues, className, onSave, onClose, ...rest }: { defaultValues: Inputs; onSave?: (data: Inputs) => void; onClose?: () => void; } & HTMLAttributes<HTMLDivElement>) {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({ defaultValues });

    function onSubmit(data: any) {
        return console.log(data);
    }

    const forwardSave = (data: Inputs) => {
        console.info("Submit ModalForm", data);
        onSave?.(data);
    };

    const handleSubmitWithoutPropagation = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit(forwardSave)(e);
    };

    return (
        <div className={classNames("px-4 pt-8 w-full h-full flex flex-col", className)} {...rest}>

            <div className="flex-1 grid place-items-center">
                <div className="border-yellow-700 border rounded shadow overflow-hidden">
                    <form className="pt-0.5 w-[420px] bg-yellow-400 grid gap-y-2 " onSubmit={(e) => handleSubmitWithoutPropagation(e)}>

                        <div className="px-4 py-2 text-xl font-semibold bg-yellow-500 rounded-t scale-y-110 tracking-tighter select-none">
                            Form caption
                        </div>

                        {/* https://tailwind-elements.com/docs/standard/forms/registration-form */}
                        {/* <div className="flex flex-wrap justify-center">
                            <button
                                type="button"
                                className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                data-te-toggle="tooltip"
                                data-te-html="true"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
                                Tooltip with html
                            </button>
                        </div>

                        <div className="relative mb-6 bg-red-500" data-te-input-wrapper-init>
                            <input
                                type="text"
                                className="peer block min-h-[auto] w-full rounded 
                                border-0 
                                bg-white 
                                py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear 
                                
                                focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 
                                
                                motion-reduce:transition-none 
                                dark:text-neutral-200 dark:placeholder:text-neutral-200 
                                [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"

                                id="exampleFormControlInput2"
                                placeholder="--Email address" />
                            <label
                                htmlFor="exampleFormControlInput2"
                                className="pointer-events-none 
                                absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] 
                                text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] 
                                peer-focus:scale-[0.8] 
                                peer-focus:text-primary 
                                peer-data-[te-input-state-active]:-translate-y-[1.15rem] 
                                peer-data-[te-input-state-active]:scale-[0.8] 
                                motion-reduce:transition-none 
                                dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                            >Email address
                            </label>
                        </div> */}

                        <label className="relative">
                            <input
                                className="py-1.5 w-full peer float-input border-slate-300 border"
                                type="text"
                                placeholder="placeholder"
                            />
                            <div className="float-label">
                                placeholder
                            </div>
                        </label>


                        <div className="p-4">
                            <OtherControlsGroup register={register} errors={errors} watch={watch} />

                            {/* Buttons */}

                            <div className="flex items-center justify-end gap-x-2">
                                <Button onClick={() => reset(defaultValues)}>Reset</Button>
                                <Button type="submit">OK</Button>

                                {onClose && <Button onClick={(e) => { e.preventDefault(); e.stopPropagation(); onClose(); }}>Close</Button>}
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <LiveDebugDisplay watch={watch} />
        </div>
    );
}
