import { ButtonHTMLAttributes, ReactNode } from "react";
import { createPortal } from "react-dom";
import { FieldErrors, FieldValues, UseFormRegisterReturn } from "react-hook-form";
import { classNames } from "../../utils/classnames";

export function Input<T extends FieldValues>({ registered, errors }: { registered: UseFormRegisterReturn; errors: FieldErrors<T>; }) {
    const name = registered.name as keyof T;
    const error = errors[name]?.message;
    return (
        <div className="grid">
            <input className="px-4 py-2 rounded" {...registered} />
            <span className={classNames("text-xs text-[red] select-none", !error && 'invisible',)}><>{error}&nbsp;</></span>
        </div>
    );
}

export type SelectOption = {
    label: React.ReactNode;
    value: string | number | string[];
};

export function Select<T extends FieldValues>({ registered, errors, options }: { registered: UseFormRegisterReturn; errors?: FieldErrors<T>; options: SelectOption[]; }) {
    return (
        <select className="px-4 py-2 h-10 rounded" {...registered}>
            {options.map(({ label, value }, idx) => (
                <option value={value} key={idx}>{label}</option>
            ))}
        </select>
    );
}

export function Radio({ registered, label, value }: { registered: UseFormRegisterReturn; label: ReactNode; value: string; }) {
    return (
        <label className="flex items-center gap-x-1 select-none">
            <input type="radio" className="px-4 py-2 w-5 h-5 accent-yellow-900 rounded" value={value} {...registered} />
            <span>{label}</span>
        </label>
    );
}

export function Button({ children, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className="place-self-center mt-4 px-4 py-2 bg-yellow-500 border-yellow-500 border rounded select-none active:scale-y-95" {...rest}>
            {children}
        </button>
    );
}

export function DebugDisplay({ displayValues }: { displayValues: unknown; }) {
    return (
        <div className="py-4 text-sm">
            <pre>{JSON.stringify(displayValues, null, 4)}</pre>
        </div>
    );
}

export function ReactPortal({ children, containerSelector = "#portals-container" }: { children: ReactNode; containerSelector?: string | Element; }) {
    const el = typeof containerSelector === 'string' && document.querySelector(containerSelector);
    const containerEl = el || containerSelector as Element || document.body;
    return createPortal(children, containerEl);
}
