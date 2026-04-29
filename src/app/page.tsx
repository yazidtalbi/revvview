import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { Star, Activity, ArrowRight, CornerDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-background">
      <Header />

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column (Main Feed & Site of the Day) */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            
            {/* Site of the Day */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-muted-foreground tracking-wide">Site of the Day</h2>
              </div>
              <Link href="/site/aria-chen.com" className="block">
                <Card className="rounded-2xl border border-border shadow-sm overflow-hidden group cursor-pointer transition-all hover:border-black bg-white">
                <div className="relative aspect-[16/9] w-full bg-secondary border-b border-border">
                  <Image 
                    src="https://i.pinimg.com/1200x/99/9b/8d/999b8dc5a3229b8148f5dd612ece8930.jpg"
                    alt="Site of the Day Mockup"
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    priority
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-primary hover:bg-primary text-white rounded-full border-none font-semibold px-4 py-2 text-xs shadow-sm">
                      <Star className="w-3.5 h-3.5 mr-1.5 fill-white" /> Top Rated
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-3xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">Aria Chen Portfolio</h3>
                      <p className="text-muted-foreground max-w-lg text-sm leading-relaxed">
                        Digital craft and creative design portfolio. Transforming ideas into visually stunning, user-centric web experiences.
                      </p>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline" className="rounded-full border-border bg-white text-foreground font-medium px-4 py-1.5">Clean UX</Badge>
                      <Badge variant="outline" className="rounded-full border-border bg-white text-foreground font-medium px-4 py-1.5">Editorial</Badge>
                      <Badge variant="outline" className="rounded-full border-border bg-white text-foreground font-medium px-4 py-1.5">High Potential</Badge>
                    </div>
                  </div>
                  <div className="sm:text-right flex flex-row sm:flex-col items-center sm:items-end gap-3 sm:gap-1">
                    <div className="flex items-center gap-1.5 text-primary font-bold text-3xl">
                      4.9 <Star className="w-6 h-6 fill-primary" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground tracking-wider">128 Reviews</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </section>

            {/* Latest Requests */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-muted-foreground tracking-wide">Latest Requests</h2>
                <Button variant="ghost" className="text-sm font-bold text-muted-foreground hover:text-black rounded-xl h-auto p-0 hover:bg-transparent">
                  View All <ArrowRight className="w-4 h-4 ml-1"/>
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'dataflow.io', desc: 'Empower your team with real-time analytics. Seeking feedback on the onboarding flow.', labels: ['SaaS', 'Need Feedback'], rating: 4.8 },
                  { name: 'lumina.so', desc: 'A new way to manage your team\'s knowledge base. Does the pricing page make sense?', labels: ['B2B', 'Landing Page'], rating: 4.5 },
                  { name: 'fintex.app', desc: 'Personal finance tracker with a clean interface. Want thoughts on the dark mode palette.', labels: ['Fintech', 'Dark Mode'], rating: 4.2 },
                  { name: 'nexus.dev', desc: 'Developer tools hub. Looking for harsh critiques on our documentation layout.', labels: ['DevTools', 'Clean UX'], rating: 3.9 },
                ].map((site, i) => (
                  <Link href={`/site/${site.name}`} key={i} className="block group">
                    <Card className="rounded-2xl border border-border shadow-sm group-hover:border-black transition-all cursor-pointer flex flex-col bg-white h-full overflow-hidden">
                    <div className="p-5 border-b border-border flex justify-between items-start">
                      <div className="space-y-1">
                        <h4 className="font-bold text-lg tracking-tight group-hover:text-primary transition-colors">
                          {site.name}
                        </h4>
                        <span className="text-[10px] tracking-wider font-semibold text-muted-foreground">Submitted {i * 2 + 1}h ago</span>
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
            </section>
            
          </div>

          {/* Right Column (Active Feed) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-muted-foreground tracking-wide flex items-center gap-2">
                  <Activity className="w-4 h-4 text-primary" /> Live Vouches
                </h2>
              </div>
              <Card className="rounded-2xl border border-border shadow-sm bg-white overflow-hidden">
                <div className="flex flex-col">
                  {[
                    { user: 'JD', site: 'dataflow.io', rating: 5, comment: 'Clean UI, but the mobile experience needs work.' },
                    { user: 'AL', site: 'aria-chen.com', rating: 5, comment: 'Stunning editorial layout. Love the typography.' },
                    { user: 'MR', site: 'fintex.app', rating: 4, comment: 'Dark mode is great, maybe increase contrast slightly.' },
                    { user: 'SK', site: 'nexus.dev', rating: 3, comment: 'Navigation is a bit confusing to me.' },
                    { user: 'TJ', site: 'lumina.so', rating: 4, comment: 'Pricing page is clear, good use of white space.' },
                    { user: 'EB', site: 'dataflow.io', rating: 5, comment: 'Incredible animations.' },
                  ].map((item, i) => (
                    <div key={i} className={`p-5 ${i !== 5 ? 'border-b border-border' : ''} hover:bg-secondary/50 transition-colors cursor-pointer group`}>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-black text-white border border-black rounded-full flex items-center justify-center shrink-0">
                          <span className="text-[10px] font-bold tracking-wider">{item.user}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">
                            <span className="font-semibold">User{i * 123 + 42}</span> rated <span className="font-medium group-hover:underline decoration-primary underline-offset-2">{item.site}</span>
                          </p>
                          <div className="flex items-center justify-between mt-1.5">
                            <div className="flex gap-0.5">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className={`w-3.5 h-3.5 ${star <= item.rating ? 'fill-primary text-primary' : 'text-muted'}`} />
                              ))}
                            </div>
                            <span className="text-[10px] font-semibold tracking-wider text-muted-foreground">{i * 12 + 5}m ago</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-3 flex items-start gap-2 bg-secondary/50 p-3 rounded-xl border border-border">
                            <CornerDownRight className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                            <span className="italic leading-snug">"{item.comment}"</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
