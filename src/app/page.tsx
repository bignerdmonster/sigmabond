import Link from "next/link";
import { db } from "~/server/db";

export default async function HomePage() {
  const tutorials = await db.query.tutorials.findMany();
  return (
    <main>
      <body className="justify-center">
        {tutorials.map((step) =>(
          <div className="w-4/5 mx-auto py-2 flex flex-auto flex-wrap gap-2">
            <article key=1 className="prose">
              <h2>Step <b>{step.num}</b></h2>
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
