import Link from "next/link";
import { db } from "~/server/db";

export default async function HomePage() {
  const steps = await db.query.steps.findMany();
  return (
    <main className="">
      <body className="justify-center">
        {steps.map((step) =>(
          <div className="w-4/5 mx-auto py-2 flex flex-auto flex-wrap gap-2">
            <article key=1 className="prose">
              <h2>Step {step.num}: <b>{step.name}</b></h2>
              <p>{step.why}</p>
            </article>
            <article key=2 className="prose">
              <p>{step.how}</p>
            </article>
          </div>
          ))}
      </body>
    </main>
  );
}
