
export function parseBoolean(env_name: string, _default: boolean | number | null = null) {
    const arg = process.env[env_name];
    if (arg != undefined) {
        switch (arg.toLowerCase()) {
            case 'true': return true;
            case 'false': return false;
            default: throw new Error('Unknow arg to boolean parse: ' + arg);
        }
    }

    if (typeof _default === "number") {
        switch (_default) {
            case 0: return false;
            case 1: return true;
            default: throw new Error(`Cannot parse Int(${_default}) to Boolean. Can be only 0 or 1`);
        }
    }
    if (typeof _default === "boolean")
        return _default

    throw new Error(`Env '${env_name}'(boolean) is mandatory`)
}

export function parseString(env_name: string, _default: string | null = null) {
    const arg = process.env[env_name];
    if (arg != undefined) return arg;
    if (_default != null) return _default;
    throw new Error(`Env '${env_name}'(string) is mandatory`)
}

export function parseInt(env_name: string, _default: number | null = null) {
    const arg = process.env[env_name];
    if (arg != undefined) {
        let result = Number.parseInt(arg);
        if (isNaN(result)) throw new Error(`Cannot parse integer from env(${env_name})`)
        return result;
    }
    if (_default != null) return _default;
    else throw new Error(`Env '${env_name}'(number) is mandatory`);
}

export default {
    boolean: parseBoolean,
    string: parseString,
    int: parseInt
}