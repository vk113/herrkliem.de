import { writable } from 'svelte/store';

export const e_in_front = writable(true);

export const B_min = writable(-1);
export const B_max = writable(1);
export const B_step = writable(0.001);
export const E_min = writable(-2);
export const E_max = writable(2);
export const E_step = writable(0.001);
  