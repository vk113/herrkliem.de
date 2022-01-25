import { writable } from 'svelte/store';

export const e_in_front = writable(true);

export const B_min = writable(-0.5);
export const B_max = writable(0.5);
export const B_step = writable(0.001);
export const E_min = writable(-10e4);
export const E_max = writable(10e4);
export const E_step = writable(10e2);
  