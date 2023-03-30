export function mergeDefaultAndSaved<T extends {}>(def: T, saved: T): T {
    const defKeys = Object.keys(def) as (keyof T)[];
    const res = defKeys.map((key) => saved[key] !== undefined ? saved[key] : def[key]);
    return res as unknown as T;
}
