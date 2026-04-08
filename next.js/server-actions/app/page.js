// app/page.js
"use client";
import submitAction from "@/actions/form";
import { useRef } from "react";

export default function Home() {
  const formRef = useRef();

  return (
    <div className="mx-auto w-2/3">
      <form
        ref={formRef}
        action={async (formData) => {
          await submitAction(formData);
          formRef.current.reset();
        }}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="border border-amber-50 rounded-md m-2 p-1"
            placeholder="name"
            name="name"
            id="name"
          />
        </div>

        <div>
          <label htmlFor="Address">Address</label>
          <input
            type="text"
            className="border border-amber-50 rounded-md m-2 p-1"
            placeholder="Address"
            name="Address"
            id="Address"
          />
        </div>

        <span className="rounded-2xl bg-blue-700 border border-amber-50 p-2 m-2">
          <button className="rounded-2xl text-white" type="submit">
            Submit
          </button>
        </span>
      </form>
    </div>
  );
}