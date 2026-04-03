type Frame = readonly [number, unknown];
interface ClampOptions {
    cast: {
        frames: Frame[];
        duration: number;
    };
    at?: number;
    from?: number;
    to?: number;
}
export declare function from(options: ClampOptions): number;
export declare function to(options: ClampOptions): number;
export {};
//# sourceMappingURL=util.d.ts.map