// actions/form.js
"use server";

import fs from "fs/promises";

export default async function submitAction(formData) {
  const name = formData.get("name");
  const address = formData.get("Address");

  console.log(name, address);

  await fs.writeFile("vivek.txt", `Name: ${name}\nAddress: ${address}`);
}