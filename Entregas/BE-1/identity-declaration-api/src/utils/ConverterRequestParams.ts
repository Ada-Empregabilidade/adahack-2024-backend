export function convertStringToBooleanOrNull(value: string): boolean | null {
    if (value.toLowerCase() === "true") return true;
    if (value.toLowerCase() === "false") return false;
    if (value.toLowerCase() === "null") return null;
    return null;
}
