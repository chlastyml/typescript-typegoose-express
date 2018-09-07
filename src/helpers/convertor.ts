
export function parseBoolean(envName: string, defaultValue: boolean | number | null = null) {
    const arg = process.env[envName];
    if (arg !== undefined) {
        switch (arg.toLowerCase()) {
            case 'true': return true;
            case 'false': return false;
            default: throw new Error('Unknow arg to boolean parse: ' + arg);
        }
    }

    if (typeof defaultValue === "number") {
        switch (defaultValue) {
            case 0: return false;
            case 1: return true;
            default: throw new Error(`Cannot parse Int(${defaultValue}) to Boolean. Can be only 0 or 1`);
        }
    }
    if (typeof defaultValue === "boolean") {
        return defaultValue;
    }

    throw new Error(`Env '${envName}'(boolean) is mandatory`);
}

export function parseString(envName: string, defaultValue: string | null = null) {
    const arg = process.env[envName];
    if (arg !== undefined) { return arg; }
    if (defaultValue != null) { return defaultValue; }
    throw new Error(`Env '${envName}'(string) is mandatory`);
}

export function parseInt(envName: string, defaultValue: number | null = null) {
    const arg = process.env[envName];
    if (arg !== undefined) {
        const result = Number.parseInt(arg, undefined);
        if (isNaN(result)) { throw new Error(`Cannot parse integer from env(${envName})`); }
        return result;
    }
    if (defaultValue != null) {
        return defaultValue;
    } else {
        throw new Error(`Env '${envName}'(number) is mandatory`);
    }
}

export default {
    boolean: parseBoolean,
    int: parseInt,
    string: parseString,
};
