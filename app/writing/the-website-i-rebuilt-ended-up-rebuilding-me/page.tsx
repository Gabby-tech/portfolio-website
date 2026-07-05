import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CopyEmailButton from "../../components/copy-email-button";

export const metadata: Metadata = {
  title: "The Website I Rebuilt Ended Up Rebuilding Me",
  description:
    "I left a website builder to rebuild BossFx from scratch with Next.js and Supabase. Here is what actually broke, what I learned about debugging, and how the project rebuilt me.",
  openGraph: {
    title: "The Website I Rebuilt Ended Up Rebuilding Me",
    description:
      "What rebuilding a fintech education platform from scratch taught me about real engineering.",
    type: "article",
    images: ["/writing/bossfx-live-site.png"],
  },
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-14 text-2xl font-semibold tracking-tight text-zinc-100">
      {children}
    </h2>
  );
}

function Code({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-900/60 p-4 font-mono text-sm leading-relaxed text-zinc-300">
      <code>{children}</code>
    </pre>
  );
}

export default function Article() {
  return (
    <article className="py-20">
      <p className="font-mono text-sm text-emerald-400">Writing · July 2026</p>
      <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
        The Website I Rebuilt Ended Up Rebuilding Me
      </h1>
      <p className="mt-4 max-w-2xl text-zinc-400">
        By Timilehin Shobande · What leaving a website builder and owning my
        own stack actually taught me
      </p>

      <div className="mt-12 max-w-2xl space-y-5 leading-relaxed">
        <p>
          I started studying Computer Science at the University of Lagos in
          2018. The plan was simple: five years, some projects, an internship
          or two, then a career in software. That plan did not survive contact
          with reality. COVID shut everything down, then the ASUU strikes came,
          and years I should have spent learning and building disappeared while
          I waited for school to resume.
        </p>
        <p>
          I&apos;m not telling you this for sympathy. I&apos;m telling you
          because my whole path only makes sense if you know it didn&apos;t
          start in a classroom. It started with me refusing to sit still. I
          couldn&apos;t control when lectures would resume, so I focused on
          something I could control. For me, that was trading.
        </p>
        <p>
          I picked up an interest in forex around 2022, and honestly, it
          wasn&apos;t about money at first. I enjoyed understanding how markets
          moved. I spent long hours studying charts, testing strategies,
          documenting my trades, and learning risk management the slow,
          expensive way.
        </p>

        <H2>The accidental mentor</H2>
        <p>
          Then friends started asking questions. First one, then a few more,
          mostly referrals. Before I had a name for it, I was a mentor. The
          first version of BossFx wasn&apos;t a company. It was me posting
          market analysis on Telegram and YouTube and consistently teaching
          maybe three to five people at a time.
        </p>
        <p>
          Teaching exposed something I didn&apos;t expect. The biggest problem
          my students had wasn&apos;t trading. It was technology.
        </p>
        <p>
          One student asked me a question that caught me completely off guard.
          He wasn&apos;t confused about the market. He was confused about how
          to get started at all. Opening the platform, finding the right
          resources, knowing what to click first. I had built my teaching
          around what I thought was important, not around what beginners
          actually struggled with.
        </p>
        <p>
          I kept circling one question: why does something this powerful still
          feel so difficult for the average person? Somewhere in there, my
          trading questions quietly became engineering questions.
        </p>

        <H2>Shipping something imperfect</H2>
        <p>
          My first website was nothing special, and I mean that literally. I
          built it with Hostinger&apos;s AI website builder because it was the
          fastest option I had. A landing page, mentorship booking, a few
          digital products I&apos;d written. Live in days.
        </p>
        <p>
          I don&apos;t regret that choice at all. It taught me a lesson I
          still hold onto: publishing something imperfect beats waiting for
          perfection.
        </p>
        <p>
          But growth has a way of exposing your foundations. Every new idea
          started with me searching Hostinger for a setting or a plugin, and if
          it wasn&apos;t there, that was the end of the conversation. I wanted
          user accounts. Gated downloads after signup. Automated mentorship
          registration. Proper payment integration. Analytics. Dashboards.
          Eventually a real learning platform. The builder had opinions about
          all of it, and its opinion was usually no.
        </p>
        <p>
          The pricing made it worse. Every meaningful feature seemed to sit
          behind another upgrade or subscription. At some point I realised I
          wasn&apos;t just paying for hosting anymore. I was paying for
          permission to build.
        </p>
        <p>
          So I asked myself the question that changed everything: if BossFx is
          going to become the platform I imagine, why am I building it on
          something I don&apos;t actually control?
        </p>

        <H2>Volunteering to make my own life harder</H2>
        <p>
          I decided to rebuild everything from scratch. Next.js, because I
          wanted something modern I could grow into. Supabase, because I needed
          authentication, a database and storage without writing an entire
          backend from day one. It felt like the right balance between learning
          and actually shipping.
        </p>
        <p>Then reality hit, and it didn&apos;t hit where I expected.</p>
        <p>
          The first real fight wasn&apos;t an algorithm. It was deployment. I
          pushed what I was sure was a working site to Vercel, because it ran
          fine on my laptop. The deployment failed. I checked environment
          variables. Then package versions. Then imports. Then configuration
          files. Every fix seemed to uncover a new problem underneath it.
        </p>
        <p>
          The worst part wasn&apos;t any single error. It was the fog. When
          something broke, I genuinely couldn&apos;t tell whether the problem
          was my code, Supabase, Next.js or Vercel. Four suspects, and I
          didn&apos;t know how to interrogate any of them.
        </p>
        <p>
          There were nights I seriously wondered whether leaving the website
          builder had been a mistake. With Hostinger, at least the site stayed
          online. Now everything was my responsibility. Some evenings I&apos;d
          spend four or five hours chasing a problem that turned out to be a
          missing environment variable.
        </p>

        <H2>The four questions I ask now</H2>
        <p>
          What came out of those weeks is probably the most useful thing I own
          as an engineer: a boring, repeatable way to debug. When something
          breaks now, I don&apos;t panic and I don&apos;t assume the framework
          is broken. I ask:
        </p>
        <ol className="list-decimal space-y-2 pl-5 text-zinc-300">
          <li>Is it local or production?</li>
          <li>Is it the code or the environment?</li>
          <li>What changed since it last worked?</li>
          <li>Can I isolate one variable before changing five others?</li>
        </ol>
        <p>
          It&apos;s slower than changing ten things at once and hoping. It
          also actually works.
        </p>
        <p>
          The bug that made this lesson permanent was almost embarrassing. Much
          later, I was cleaning up my BossFx PWA repository, with Claude Code
          reviewing the codebase alongside me, and the production build refused
          to compile. I assumed it was another deep framework issue. The review
          found the real cause, and it was nothing like that. There were two
          Supabase client files in the project, and one of them had a trailing
          space in its filename:
        </p>
        <Code>{`lib/supabaseClient .ts    ← the file that actually existed
lib/supabaseClient.ts     ← the file my import was looking for`}</Code>
        <p>
          On top of that, <span className="font-mono text-sm">@supabase/supabase-js</span>{" "}
          wasn&apos;t even listed in package.json. Which meant this application
          had never truly built. Two tiny mistakes, invisible in the editor,
          completely fatal in production.
        </p>
        <p>
          I should be clear about the AI part, because people get this wrong.
          Claude Code doesn&apos;t build things instead of me. It works more
          like a senior engineer I can ask questions without feeling
          embarrassed. It challenges my assumptions and explains why something
          is broken instead of just handing me code to paste. The thinking is
          still my job. That&apos;s exactly why I trust what I&apos;ve learned.
        </p>
        <p>
          That one bug taught me more than some courses I&apos;ve paid for.
          Engineering isn&apos;t always difficult algorithms. Sometimes
          it&apos;s noticing the tiny detail everyone assumes couldn&apos;t
          possibly be the problem.
        </p>

        <H2>The rabbit holes nobody warns you about</H2>
        <p>
          Owning your own stack means owning everything around the code too,
          and nobody tells you how deep those holes go.
        </p>
        <p>
          My automated emails from Brevo kept landing in Gmail&apos;s
          Promotions tab instead of the inbox. Fixing that dragged me into SPF
          records, DKIM signatures, DMARC policies and sender reputation. I
          thought I was building a website. Instead I was getting an education
          in email authentication.
        </p>
        <p>
          Moving my domain between providers was supposed to be one click on
          &quot;Transfer Domain.&quot; It turned into DNS propagation, email
          routing, and re-verifying every integration to make sure nothing
          silently died.
        </p>
        <p>
          Then analytics. Adding Google Analytics and Microsoft Clarity to a
          Next.js app is not hard. Confirming that events actually fire, in
          production, on real traffic, is a separate job entirely, and
          it&apos;s the kind of work tutorials never show you.
        </p>
        <p>None of this is glamorous. All of it is the job.</p>

        <H2>Code with real money attached</H2>
        <p>
          The website taught me production discipline. My trading systems
          taught me a different kind of respect.
        </p>
        <p>
          I write Expert Advisors in MQL5, automated systems that execute
          trades on MetaTrader 5. When your code makes decisions with real
          money attached, &quot;it seems to work&quot; is not a standard. My
          SMA trend EA is honestly mostly risk management wrapped around a
          simple signal: percentage-based position sizing, a daily loss circuit
          breaker, a cap on trades per day, spread and session filters.
        </p>
        <p>
          Even the position sizing is written defensively. Calculate the lot,
          then clamp it against every limit the broker gives you:
        </p>
        <Code>{`lot = MathFloor(lot / lotStep) * lotStep;        // round down to the broker's step
if(lot < minLot) lot = minLot;                   // never below the minimum
if(lot > maxLot) lot = maxLot;                   // never above the maximum
if(marginRequired > freeMargin) return minLot;   // never trade what you can't afford`}</Code>
        <p>
          Every change, no matter how small, meant re-running the backtests,
          because a tiny adjustment can completely alter a strategy&apos;s
          behaviour. Then forward-testing on a demo account before real money
          ever touched it.
        </p>
        <figure className="my-8">
          <Image
            src="/writing/mt5-strategy-tester.png"
            alt="The BossFx SMA Pro Trend EA running in the MT5 Strategy Tester on XAUUSD H1, with the risk dashboard showing trade limits and daily loss protection"
            width={2880}
            height={1800}
            className="rounded-lg border border-zinc-800"
          />
          <figcaption className="mt-2 text-sm text-zinc-500">
            The EA in the MT5 Strategy Tester on gold (XAUUSD, H1). The journal
            at the bottom is the trailing stop doing its job.
          </figcaption>
        </figure>
        <p>
          That project settled something for me: writing code is only half the
          job. Proving the code behaves correctly is the other half.
        </p>

        <H2>Users redesign your thinking</H2>
        <p>
          Remember that student who couldn&apos;t figure out how to get
          started? He changed how I build more than any tutorial did.
        </p>
        <p>
          After that conversation, I stopped throwing information at people and
          started breaking everything into structured learning paths, beginner
          resources, recorded sessions, and eventually the website itself.
          Every time someone got stuck, I treated it as a design problem
          instead of assuming they weren&apos;t trying hard enough.
        </p>
        <p>
          That mindset carried straight into software. When users can&apos;t
          figure something out, my first question is no longer &quot;why
          don&apos;t they understand?&quot; It&apos;s &quot;what did I design
          poorly?&quot;
        </p>

        <H2>Stubbornness</H2>
        <p>
          People assume what kept me going was passion. Honestly? It was
          stubbornness.
        </p>
        <p>
          Every week there was another thing I didn&apos;t know. Git.
          Authentication. Environment variables. DNS. Email deliverability.
          Production builds. And I was bootstrapping from Nigeria, where almost
          every online service costs money once you pass the free tier. Every
          subscription was another expense I had to justify to myself.
        </p>
        <p>
          I kept going because I had invested too much time to go backwards,
          and because I knew that if I wanted to build products instead of just
          websites, I had to understand how the technology actually worked. I
          didn&apos;t want to spend my career waiting for a platform to unlock
          features for me.
        </p>
        <p>
          The irony is that this is exactly what I got. Today I understand my
          own stack well enough to build it, debug it and improve it myself.
          Nobody has to unlock anything for me anymore.
        </p>

        <H2>The website rebuilt me</H2>
        <p>
          Back then, I measured progress almost entirely by visible numbers.
          Was BossFx growing? How many students? How much revenue? When those
          numbers moved slowly, I felt like I wasn&apos;t moving either.
        </p>
        <p>I was measuring the wrong things.</p>
        <p>
          The real progress was quieter. Every problem I solved was making me
          slightly more capable. Learning Git. Understanding deployments.
          Fighting DNS. Building with Next.js and Supabase. Writing MQL5
          systems. Learning to work with AI as an engineering partner instead
          of a chatbot. None of it felt like a breakthrough on the day it
          happened. Stacked over two years, it completely changed what I&apos;m
          able to build.
        </p>
        <p>
          If I had quit in 2024, I would have walked away right before
          everything I was learning started connecting together.
        </p>
        <p>
          Looking back, I realised I wasn&apos;t really collecting programming
          languages or frameworks. I was collecting ways of thinking. Every
          deployment failure taught me to isolate variables. Every confused
          student taught me to simplify complexity. Every bug taught me to slow
          down before assuming. Those lessons now follow me into every product
          I build.
        </p>
        <p>
          I used to think I was building BossFx. Looking back, BossFx was also
          building me. It forced me to become a trader who could teach, a
          founder who could sell, and eventually an engineer who could build
          the tools I always wished existed.
        </p>
        <figure className="my-8">
          <Image
            src="/writing/bossfx-live-site.png"
            alt="The live BossFx Academy homepage: Learn Forex. Build Systems. Trade Like a Pro."
            width={2880}
            height={1800}
            className="rounded-lg border border-zinc-800"
          />
          <figcaption className="mt-2 text-sm text-zinc-500">
            The platform today. A long way from a website builder.
          </figcaption>
        </figure>
        <p>
          The work is public now. The platform is live at{" "}
          <a href="https://bossfxcademy.com" className="text-emerald-400 hover:underline">
            bossfxcademy.com
          </a>
          , the trading system code is on{" "}
          <a href="https://github.com/Gabby-tech" className="text-emerald-400 hover:underline">
            my GitHub
          </a>
          , and I document what I&apos;m building right here. If any of this is
          useful to you, or you&apos;re building something of your own from
          Lagos or anywhere else, my inbox is open.
        </p>
      </div>

      <div className="mt-16 flex gap-4">
        <Link
          href="/case-studies/bossfx"
          className="rounded-md border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-200 hover:border-emerald-400 hover:text-emerald-400"
        >
          Read the engineering case study
        </Link>
        <CopyEmailButton label="Get in touch" />
      </div>
    </article>
  );
}
