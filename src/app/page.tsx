import Link from "next/link";
import { db } from "~/server/db";

export default async function HomePage() {
  const steps = await db.query.steps.findMany();
  return (
    <main className="">
      <body className="">
        <div className="flex flex-col justify-center gap-6">
        {steps.map((step) =>(
          <div key={step.id} className="w-4/5 mx-auto my-10 py-5 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg flex flex-row flex-auto flex-wrap justify-evenly">
            <div className="px-5 py-2 backdrop-blur-lg bg-slate-950/45 rounded-md bg-blur flex flex-col prose">
              <h2 className="">Step {step.numer}: {step.name}</h2>
              <p className="text-center">{step.why}</p>
            </div>
            <div className="basis-3/4 flex bg-slate-700/75 rounded-lg items-center align-middle prose">
              <p className="ml-5">{step.how}</p>
            </div>
          </div>
          ))}
          </div>
      </body>
    </main>
  );
}
