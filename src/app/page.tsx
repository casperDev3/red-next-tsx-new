"use client";

import s from "./page.module.css";
import Slider from "@/components/slider";

import type { RootState } from "./store/store";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./store/features/counter/counterSlice";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <main className={s.main}>
      <div className={s.counter}>
        <button className={s.button} onClick={() => dispatch(increment())}>
          +
        </button>
        <span className={s.count}>{count}</span>
        <button className={s.button} onClick={() => dispatch(decrement())}>
          -
        </button>
        <button
          className={s.button}
          onClick={() => dispatch(incrementByAmount(10))}
        >
          +10
        </button>
      </div>
    </main>
  );
}
