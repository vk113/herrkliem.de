import { writable } from 'svelte/store';

export const show_beams = writable(false);

export const B_min = writable(-2);
export const B_max = writable(2);
export const B_step = writable(0.001);
export const E_min = writable(-10e4);
export const E_max = writable(10e4);
export const E_step = writable(10e1);
  