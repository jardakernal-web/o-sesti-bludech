import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ArrowDown, BookOpen, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
const cover = { url: "/obrazky/book-cover.jpg" };
const openBook = { url: "/obrazky/book-open.jpg" };
const detail = { url: "/obrazky/book-detail.jpg" };

const shopUrl = "https://eshop.solideogloria.cz/o-sesti-bludech/";
const topics = ["Stvoření", "Víra", "Odpuštění hříchů", "Poslušnost", "Prokletí a vyobcování", "Svatokupectví"];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "O šesti bludech — Mistr Jan Hus | Soli Deo Gloria" },
      { name: "description", content: "Nadčasové dílo Mistra Jana Husa v jazyce přístupném současnému čtenáři. Objevte knihu O šesti bludech a zakupte ji v e-shopu Soli Deo Gloria." },
      { property: "og:title", content: "O šesti bludech — Mistr Jan Hus" },
      { property: "og:description", content: "Šest bludů, které ohrožují čistotu víry. Poznejte knihu Jana Husa z nakladatelství Soli Deo Gloria." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      <header className="border-b border-border">
        <div className="page-width flex h-22 items-center justify-between gap-4">
          <a href="https://www.solideogloria.cz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3" aria-label="Soli Deo Gloria – web vydavatele">
            <span className="editorial flex size-10 items-center justify-center rounded-full border border-primary text-2xl text-primary">S</span>
            <span><span className="editorial block text-xl leading-tight">Soli Deo Gloria</span><span className="block text-[9px] uppercase text-muted-foreground">Jedině Bohu buď sláva</span></span>
          </a>
          <nav aria-label="Hlavní navigace" className="hidden items-center gap-9 text-sm md:flex">
            <a href="#o-knize" className="transition-colors hover:text-primary">O knize</a>
            <a href="#sest-bludu" className="transition-colors hover:text-primary">Šest bludů</a>
            <a href="#vydani" className="transition-colors hover:text-primary">O vydání</a>
          </nav>
          <Button asChild variant="outline" className="h-10 rounded-none border-primary bg-transparent text-primary shadow-none">
            <a href={shopUrl} target="_blank" rel="noopener noreferrer">Do e-shopu <ArrowUpRight /></a>
          </Button>
        </div>
      </header>

      <main>
        <section className="hero page-width" aria-labelledby="book-title">
          <div className="hero-copy reveal">
            <p className="eyebrow flex items-center gap-3 text-primary"><span className="h-px w-8 bg-primary" /> Mistr Jan Hus</p>
            <h1 id="book-title" className="editorial hero-title">O šesti<br /><span className="text-primary">bludech</span></h1>
            <p className="hero-desc text-muted-foreground">Nadčasové varování před duchovním úpadkem a výzva k následování pravdy, na níž stojí naše víra.</p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Button asChild className="h-12 rounded-none px-6 text-sm shadow-none"><a href={shopUrl} target="_blank" rel="noopener noreferrer"><ShoppingBag /> Zakoupit knihu <ArrowUpRight /></a></Button>
              <a href="#o-knize" className="flex items-center gap-2 text-sm hover:text-primary">Objevit knihu <ArrowDown size={15} /></a>
            </div>
            <p className="mt-5 text-xs text-muted-foreground">Pevná vazba s přebalem a stužkou · 92 stran</p>
          </div>
          <img src={cover.url} alt="Kniha Jana Husa O šesti bludech v pevné vazbě s přebalem a stužkou" className="hero-image reveal" fetchPriority="high" />
        </section>

        <div className="border-y border-border bg-muted">
          <div className="page-width grid grid-cols-2 gap-y-7 py-7 md:grid-cols-4">
            {[["AUTOR", "Mistr Jan Hus"], ["PODOBA TEXTU", "Pro současného čtenáře"], ["VAZBA", "Pevná s přebalem"], ["VYDAVATEL", "Soli Deo Gloria"]].map(([label, value]) => <div key={label} className="border-l border-border pl-5 first:border-l-0 first:pl-0"><p className="eyebrow text-muted-foreground">{label}</p><p className="mt-2 text-sm">{value}</p></div>)}
          </div>
        </div>

        <section id="o-knize" className="page-width grid gap-10 py-20 md:grid-cols-[.85fr_1fr] md:gap-24 md:py-28">
          <div><p className="eyebrow mb-6 text-primary">O knize</p><h2 className="editorial section-title">Slova minulosti.<br />Otázky dneška.</h2><div className="mt-8 h-px w-16 bg-primary" /></div>
          <div className="space-y-6 text-[16px] leading-[1.9] text-muted-foreground">
            <p className="text-lg text-foreground">Co mají společného lidské omyly, falešná poslušnost a kupčení s vírou?</p>
            <p>Mistr Jan Hus nechal ve své době vypsat na stěny Betlémské kaple šest zásadních bludů, aby lidem otevřel oči. Nadčasové dílo <em>O šesti bludech</em> odhaluje, kde všude může člověka svést neupřímná víra a slepý strach z autorit.</p>
            <p>Jan Hus v tomto traktátu věcně a s prorockou naléhavostí analyzuje nebezpečí, která ohrožují čistotu křesťanského života i církevního společenství.</p>
          </div>
        </section>

        <section id="sest-bludu" className="bg-foreground py-20 text-background md:py-24">
          <div className="page-width">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6"><div><p className="eyebrow mb-5 text-background/60">Šest témat Husova traktátu</p><h2 className="editorial section-title">Když víra ztrácí pravdu.</h2></div><BookOpen className="size-9 text-background/50" strokeWidth={1} /></div>
            <div className="grid md:grid-cols-3 md:gap-x-12">{topics.map((topic, i) => <div key={topic} className="flex items-center gap-5 border-t border-background/20 py-7"><span className="editorial text-3xl text-background/45">0{i + 1}</span><h3 className="editorial text-2xl">{topic}</h3></div>)}</div>
          </div>
        </section>

        <section id="vydani" className="page-width py-20 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
            <div><img className="photo" src={openBook.url} alt="Ukázka stran 14 a 15 z knihy O šesti bludech" loading="lazy" width="1024" height="768" /><p className="mt-3 text-center text-xs text-muted-foreground">Pohled do knihy · O šesti bludech</p></div>
            <div><p className="eyebrow mb-5 text-primary">O tomto vydání</p><h2 className="editorial section-title">Husův odkaz.<br />Srozumitelně.</h2><p className="mt-6 text-[15px] leading-[1.9] text-muted-foreground">Díky naší práci na zpřístupnění děl české duchovní tradice v moderním jazyce můžete nyní studovat tyto zásadní myšlenky v podobě, která je přístupná současnému čtenáři a vhodná pro vaše osobní studium či sdílení v církvi.</p><dl className="mt-8 text-sm">{[["Počet stran", "92"], ["Vazba", "Pevná s přebalem a stužkou"], ["Rozměr", "125 × 176 mm"], ["ISBN", "978-80-909546-6-3"]].map(([key, value]) => <div key={key} className="flex justify-between gap-5 border-b border-border py-3"><dt className="text-muted-foreground">{key}</dt><dd className="text-right">{value}</dd></div>)}</dl></div>
          </div>
        </section>

        <section className="border-y border-border bg-muted">
          <div className="page-width grid items-center gap-8 py-14 md:grid-cols-[1fr_1.25fr] md:gap-20">
            <img src={detail.url} alt="Detail pevné vazby knihy O šesti bludech" loading="lazy" className="photo max-h-80" width="1024" height="768" />
            <div><p className="eyebrow mb-4 text-primary">Kniha z nakladatelství Soli Deo Gloria</p><h2 className="editorial section-title">O šesti bludech</h2><p className="mt-4 text-muted-foreground">Mistr Jan Hus</p><Button asChild className="mt-7 h-12 rounded-none px-6 shadow-none"><a href={shopUrl} target="_blank" rel="noopener noreferrer"><ShoppingBag /> Zakoupit v e-shopu <ArrowUpRight /></a></Button><p className="mt-4 text-xs leading-relaxed text-muted-foreground">Aktuální cenu a dostupnost najdete v e-shopu vydavatele.</p></div>
          </div>
        </section>
      </main>

      <footer className="page-width py-10">
        <div className="flex flex-wrap items-center justify-between gap-6"><div><a href="https://www.solideogloria.cz" target="_blank" rel="noopener noreferrer" className="editorial text-2xl">Soli Deo Gloria</a><p className="mt-1 text-xs text-muted-foreground">Jedině Bohu buď sláva</p></div><div className="flex flex-wrap gap-7 text-xs"><a href="https://www.solideogloria.cz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary">Web vydavatele <ArrowUpRight size={13} /></a><a href={shopUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary">E-shop <ArrowUpRight size={13} /></a></div></div>
        <div className="mt-7 flex flex-wrap justify-between gap-3 border-t border-border pt-5 text-[11px] text-muted-foreground"><p>O šesti bludech · Mistr Jan Hus</p><p>Texty a fotografie: Soli Deo Gloria</p></div>
      </footer>
    </div>
  );
}
