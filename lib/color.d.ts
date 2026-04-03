export type ColorTuple = [number, number, number];
export interface ColorTheme {
    [name: string]: ColorTuple;
}
export type ColorInput<T> = ColorTuple | keyof T | string | undefined;
export declare function color<T extends ColorTheme>(input: ColorInput<T>, theme?: T, fallback?: ColorTuple): string | null;
//# sourceMappingURL=color.d.ts.map