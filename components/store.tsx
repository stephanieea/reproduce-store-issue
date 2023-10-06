import { create } from "domain";
import { Provider, createStore } from "jotai";
import { Fragment } from "react";

export const store = createStore();//typeof window === 'undefined' ? createStore() : undefined;

export const Wrapper = typeof window === 'undefined' ? Provider : Fragment;

