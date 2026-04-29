import Link from "next/link";
import Header from "@/components/Header";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const query = (await searchParams).q as string;

  return (
    <div className="flex flex-col min-h-screen font-sans bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8 border-b border-border pb-6">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Search Results</h1>
          <p className="text-muted-foreground">Showing results for <span className="font-semibold text-foreground">"{query}"</span></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: 'dataflow.io', desc: 'Empower your team with real-time analytics. Seeking feedback on the onboarding flow.', labels: ['SaaS', 'Need Feedback'], rating: 4.8 },
            { name: 'lumina.so', desc: 'A new way to manage your team\'s knowledge base. Does the pricing page make sense?', labels: ['B2B', 'Landing Page'], rating: 4.5 },
          ].map((site, i) => (
            <Link href={`/site/${site.name}`} key={i} className="block group">
              <Card className="rounded-2xl border border-border shadow-sm group-hover:border-black transition-all cursor-pointer flex flex-col bg-white h-full overflow-hidden">
                <div className="p-5 border-b border-border flex justify-between items-start">
                  <div className="space-y-1">
                    <h4 className="font-bold text-lg tracking-tight group-hover:text-primary transition-colors">
                      {site.name}
                    </h4>
                    <span className="text-[10px] tracking-wider font-semibold text-muted-foreground">Submitted 1h ago</span>
                  </div>
                  <div className="flex items-center gap-1 font-bold text-lg">
                    {site.rating} <Star className="w-4 h-4 fill-primary text-primary" />
                  </div>
                </div>
                <div className="p-5 bg-white flex-1 flex flex-col justify-between">
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {site.desc}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {site.labels.map(label => (
                      <Badge key={label} variant="secondary" className="rounded-full text-xs font-medium bg-secondary text-muted-foreground px-3 py-1 border border-border">
                        {label}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
