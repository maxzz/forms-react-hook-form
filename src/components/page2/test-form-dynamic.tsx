import { UseFormRegister, FieldErrors, Control, useFieldArray, UseFormRegisterReturn, FieldArrayWithId } from "react-hook-form";
import { Form2Inputs } from "./controls-data";
import { IconArrowDown, IconArrowUp, IconClose, IconMenu, IconTrash } from "../ui/icons";
import { useState } from "react";
import { classNames } from "@/utils";

function RowItem({ registered, errors, control }: { registered: UseFormRegisterReturn; errors: FieldErrors<Form2Inputs>; control: Control<Form2Inputs, any>; }) {
    return (
        <input className="px-2 py-1 w-full text-sm rounded" autoComplete="off" list="autocompleteOff" spellCheck="false" {...registered} />
    );
}

type RowParams = {
    field: FieldArrayWithId<Form2Inputs, "fields", "id">;
    idx: number;
    menuState: MenuState;
    register: UseFormRegister<Form2Inputs>;
    errors: FieldErrors<Form2Inputs>;
    control: Control<Form2Inputs, any>;
};

function Row({ field, idx, menuState, register, errors, control }: RowParams) {
    const [menuOpen, setMenuOpen] = useState(false);
    const onClose = (event: React.MouseEvent) => { event.preventDefault(); setMenuOpen(v => !v); };
    return (
        <div className="grid grid-cols-[1fr_1fr_1fr_auto] gap-x-1">

            <RowItem registered={register(`fields.${idx}.disp`)} errors={errors} control={control} />
            <RowItem registered={register(`fields.${idx}.value`)} errors={errors} control={control} />
            <RowItem registered={register(`fields.${idx}.type`)} errors={errors} control={control} />

            {/* <button onClick={(event) => { event.preventDefault(); remove(idx); }}> */}
            <button className="relative">
                <IconMenu className="p-1 w-5 h-5 hover:text-white hover:bg-yellow-500 rounded" onClick={(event) => { event.preventDefault(); setMenuOpen(v => !v); }} />
                {menuOpen &&
                    <MenuButtons onClose={onClose} {...menuState} />
                }
            </button>
        </div>
    );
}

type MenuState = {
    // onClose: (event: React.MouseEvent) => void;
    onDelete: (event: React.MouseEvent) => void;
    onUp: (event: React.MouseEvent) => void;
    onDn: (event: React.MouseEvent) => void;
    hasUp: boolean;
    hasDn: boolean;
};

function MenuButtons({ onClose, onDelete, onUp, onDn, hasUp, hasDn }: MenuState & { onClose: (event: React.MouseEvent) => void; }) {
    return (
        <div className="absolute right-0 top-0 py-1 bg-yellow-500 flex">
            <IconArrowUp className={classNames("p-1 w-5 h-5 hover:text-white hover:bg-orange-600 rounded", !hasUp && "invisible")} onClick={onUp} />
            <IconArrowDown className={classNames("p-1 w-5 h-5 hover:text-white hover:bg-orange-600 rounded", !hasDn && "invisible")} onClick={onDn} />
            <IconTrash className="p-1 w-5 h-5 hover:text-white hover:bg-orange-600 rounded" onClick={onDelete} />
            <IconClose className="p-1 w-5 h-5 hover:text-white hover:bg-red-600 rounded" onClick={onClose} />
        </div>
    );
}

export function GroupDynamicFields({ register, errors, control }: { register: UseFormRegister<Form2Inputs>; errors: FieldErrors<Form2Inputs>; control: Control<Form2Inputs, any>; }) {
    const { fields, append, remove } = useFieldArray({ control, name: 'fields', });
    return (<>
        <div className="grid gap-y-1">
            {fields.map((field, idx) => {
                const menuState: MenuState = {
                    // onClose: (event: React.MouseEvent) => { event.preventDefault(); setMenuOpen(v => !v); },
                    onDelete: (event: React.MouseEvent) => { event.preventDefault(); remove(idx); },
                    onUp: (event: React.MouseEvent) => { event.preventDefault(); },
                    onDn: (event: React.MouseEvent) => { event.preventDefault(); },
                    hasUp: idx > 0,
                    hasDn: idx < fields.length - 1,
                };
                return <Row field={field} idx={idx} menuState={menuState} register={register} errors={errors} control={control} key={field.id} />;
            }

            )}
        </div>

        <button
            className="mt-2 px-2 py-1 border-gray-900/20 border rounded shadow-sm active:scale-y-95"
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
