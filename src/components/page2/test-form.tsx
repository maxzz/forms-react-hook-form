import { HTMLAttributes } from "react";
import { FieldErrors, useForm, UseFormRegister, UseFormWatch } from "react-hook-form";
import { classNames } from "../../utils";
import { Input, Select, Radio, Button, DebugDisplay, InputFloat } from "./controls";
import { Inputs, selectOptions } from "./controls-data";
import { IconClose, IconStar, IconVessel7 } from "../ui/icons";

function NamesGroup({ register, errors }: { register: UseFormRegister<Inputs>; errors: FieldErrors<Inputs>; }) {
    return (<>
        <InputFloat registered={register('name', { required: 'This field is required' })} errors={errors} placeholder="User name" />
        <InputFloat registered={register('firstName', { required: 'This field is required' })} errors={errors} placeholder="First name" />
        <InputFloat registered={register('lastName', { required: 'This field is required' })} errors={errors} placeholder="Last name" />
    </>);
}

function OtherControlsGroup({ register, errors, watch }: { register: UseFormRegister<Inputs>; errors: FieldErrors<Inputs>; watch: UseFormWatch<Inputs>; }) {
    const moreDetail = watch('moreDetails');
    return (
        <div className="grid gap-2">
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
        </div>
    );
}

function LiveDebugDisplay({ watch, ...rest }: { watch: UseFormWatch<Inputs>; } & HTMLAttributes<HTMLDivElement>) {
    const displayValues = watch();
    return (
        <DebugDisplay displayValues={displayValues} {...rest} />
    );
}

export function TestForm2({ defaultValues, className, onSave, onClose, ...rest }: { defaultValues: Inputs; onSave?: (data: Inputs) => void; onClose?: () => void; } & HTMLAttributes<HTMLDivElement>) {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({ defaultValues });

    const handleSubmitWithoutPropagation = (e: any, doSave: boolean) => {
        e.preventDefault();
        e.stopPropagation();
        doSave ? handleSubmit(forwardSave)(e) : onClose?.();

        function forwardSave(data: Inputs) {
            console.info("Submit ModalForm", data);
            onSave?.(data);
        }
    };

    return (
        <div className={classNames("px-4 pt-8 w-full h-full text-yellow-900 bg-gray-900/50 flex flex-col animate-in fade-in duration-300", className)} {...rest}>

            <div className="flex-1 grid place-items-center">
                <div className="border-yellow-700 border rounded shadow overflow-hidden animate-in fade-in zoom-in ease-out duration-150">
                    <form className=" w-[420px] bg-yellow-400 grid gap-y-2" onSubmit={(e) => handleSubmitWithoutPropagation(e, true)}>

                        {/* Caption */}

                        <div className="bg-yellow-500 flex items-center justify-between select-none">
                            <div className="px-4 py-2 flex items-center ">
                                <div className="mr-4 py-2 text-xl font-semibold tracking-tighter scale-y-110 origin-bottom">Form caption</div>
                                <div className="w-4 h-4"><IconVessel7 /></div>
                                <IconStar className="w-8 h-8 fill-slate-500 animate-in fade-in duration-1000" />
                            </div>
                            {onClose &&
                                <button
                                    className="px-3 h-full hover:bg-gray-900/10 flex items-center"
                                    title="Close dialog"
                                    onClick={(e) => handleSubmitWithoutPropagation(e, false)}
                                >
                                    <div className="w-6 h-6"><IconClose /></div>
                                </button>
                            }
                        </div>

                        <div className="p-4">
                            <OtherControlsGroup register={register} errors={errors} watch={watch} />

                            {/* Buttons */}

                            <div className="flex items-center justify-end gap-x-2">
                                <Button onClick={() => reset(defaultValues)}>Reset</Button>
                                <Button type="submit">OK</Button>

                                {onClose &&
                                    <Button onClick={(e) => handleSubmitWithoutPropagation(e, false)}>Cancel</Button>
                                }
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <LiveDebugDisplay watch={watch} />
        </div>
    );
}

//TODO: click outside - now it is only modal
//TODO: escape button
