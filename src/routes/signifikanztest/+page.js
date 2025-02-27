import { browser } from "$app/environment";

export function load() {
    if (!browser){
        return {
            x :1
        }
    }
    return {
        x: Math.random()
    };
}