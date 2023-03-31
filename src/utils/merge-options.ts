export function mergeDefaultAndSaved<T extends {}>(defaults: T, loaded?: T): T {
    if (!loaded) {
        return defaults;
    }
    const keys = Object.keys(defaults) as (keyof T)[];
    const res = keys.map((key) => loaded[key] !== undefined ? loaded[key] : defaults[key]);
    return res as unknown as T;
}
