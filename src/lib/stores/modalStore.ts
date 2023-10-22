import { writable } from "svelte/store";

export const modal = writable<boolean>(false);
export const tagStore = writable<string[] | null>(null);
export const selectedPath = writable<string>();
export const scrollPosition = writable(0);

export const objectTagStore = writable<{
  tagArray: string[] | null;
  stringField: string;
  stringId: string;

}>({
  tagArray: null,
  stringField: "",
  stringId: ""
});

export function toggleModal() {
  modal.update((value) => !value);
}
