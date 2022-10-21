export function useScroller(options: { 
    x: number;
    y: number;
    isSmooth? = false
}): (() => void) | undefined;