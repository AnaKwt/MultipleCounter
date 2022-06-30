import { writable } from 'svelte/store';

export type counterItem = {
  count: number,
  title: string
};

export const counters = writable<Array<counterItem>>([{count: 0, title: "new"}]);