import { LoadedCast } from './load-cast';
import { Theme } from './default-theme';
import { Cursor, Attributes } from 'load-asciicast';
export interface ViewModelOptions {
    cursor?: boolean;
    cast: LoadedCast;
    from: number;
    to: number;
    theme: Theme;
    height?: number;
}
export interface ViewModel {
    displayHeight: number;
    displayWidth: number;
    duration: number;
    frames: ViewFrame[];
    height: number;
    registry: RegistryItem[];
    stamps: number[];
    width: number;
}
export interface ViewFrame {
    cursor: Cursor;
    lines: {
        y: number;
        words: Word[];
        hash: string;
        ref: null;
    }[];
    stamp: number;
}
export interface RegistryItem {
    type: string;
    words: Word[];
    id: number;
}
export declare function toViewModel(options: ViewModelOptions): ViewModel;
interface Word {
    attr: Attributes;
    x: number;
    children: string;
    offset: number;
}
export {};
//# sourceMappingURL=to-view-model.d.ts.map