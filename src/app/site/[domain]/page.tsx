"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { Star, ExternalLink, Activity, ArrowRight, Globe, Atom, Palette, Triangle, Database } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export default function SitePage({ params }: { params: Promise<{ domain: string }> }) {
  const { domain } = React.use(params);
  const [activeTab, setActiveTab] = useState("Overview");

  // Mock Data
  const versionsData = {
    "Overview": {
      image: "https://i.pinimg.com/1200x/99/9b/8d/999b8dc5a3229b8148f5dd612ece8930.jpg",
      about: `A brief description about ${domain}. We're looking for feedback on our onboarding flow and general UI/UX. Let us know what you think! This is a placeholder description that highlights the core features of the site.`,
    },
    "v2.0": {
      image: "https://i.pinimg.com/1200x/99/9b/8d/999b8dc5a3229b8148f5dd612ece8930.jpg",
      changelog: "We completely overhauled the navigation and implemented a new typography scale based on community feedback. We also migrated our entire design system to remove heavy box-shadows in favor of a much flatter, cleaner aesthetic.",
      score: { overall: 7.37, design: 8.2, usability: 7.5, creativity: 8.0, content: 7.1 },
      topLabel: { emoji: "🎯", title: "Clean UX", desc: "Reviewers consistently highlight the incredibly intuitive navigation and frictionless user flows that make interacting with this platform an absolute breeze." },
      reviews: [
        { name: "Alex Designer", country: "Poland", avatar: "https://i.pravatar.cc/150?u=10", overall: "9.5", design: 10, usability: 9, creativity: 10, content: 9, date: "2 days ago", text: "The aesthetic choices here are genuinely inspiring. The typography scale feels extremely considered, and the color palette is both accessible and brand-appropriate. I particularly appreciated the subtle micro-interactions on the primary call-to-action buttons. However, the mobile navigation menu could use slightly larger hit areas for better accessibility.", tags: ["Editorial", "Clean UX"] },
        { name: "Sarah Dev", country: "United States", avatar: "https://i.pravatar.cc/150?u=11", overall: "8.8", design: 9, usability: 8, creativity: 10, content: 8, date: "1 week ago", text: "From a technical standpoint, the implementation is solid. The site loads blazingly fast and the layout shift is practically zero. It's clear that performance was a top priority. The only constructive feedback I have is regarding the contrast ratio on some of the secondary text elements; they might be hard to read for visually impaired users. Otherwise, stellar work!", tags: ["High Performance", "Accessibility"] }
      ]
    },
    "v1.0": {
      image: "/site_mockup_2_1777442025267.png",
      changelog: "Initial launch of the website! We focused on a playful, bubbly aesthetic with heavy shadows and rounded corners.",
      score: { overall: 6.50, design: 6.0, usability: 5.5, creativity: 7.5, content: 7.0 },
      topLabel: { emoji: "🫧", title: "Too Bubbly", desc: "Users found the interface to be overly playful and lacking structural hierarchy." },
      reviews: [
        { name: "John Doe", country: "Canada", avatar: "https://i.pravatar.cc/150?u=22", overall: "6.5", design: 6, usability: 5, creativity: 8, content: 7, date: "Sep 12, 2023", text: "Good start, but the shadows are a bit too much and navigation is clunky.", tags: ["Clunky UX", "Too Bubbly"] }
      ]
    }
  };

  const activeData = versionsData[activeTab as keyof typeof versionsData] as any;

  return (
    <div className="flex flex-col min-h-screen font-sans bg-background">
      <Header />
      <main className="flex-1 w-full px-4 md:px-8 lg:px-12">

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 mb-20 relative">

          {/* Main Content (Left) */}
          <div className="lg:col-span-8 flex flex-col gap-12 lg:border-r border-border lg:pr-12 pb-12">

            {/* Header Section (Sticky) */}
            <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm py-6 -mt-6 mb-2 border-b border-border/0 transition-all flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
              <div className="flex flex-col items-start w-full md:w-auto overflow-hidden">
                <div className="flex items-center gap-3 mb-3 w-full overflow-x-auto no-scrollbar pb-1">
                  {['Overview', 'v2.0', 'v1.0'].map((tab) => (
                    <button 
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`text-sm font-bold whitespace-nowrap pb-1 transition-colors ${activeTab === tab ? 'text-black border-b-2 border-black' : 'text-muted-foreground hover:text-black'}`}
                    >
                      {tab} {tab === 'v2.0' ? '(Oct 24)' : tab === 'v1.0' ? '(Sep 10)' : ''}
                    </button>
                  ))}
                  
                  <Dialog>
                    <DialogTrigger render={
                      <Button variant="outline" className="h-6 px-3 ml-2 text-xs font-bold rounded-full border-border hover:border-black shrink-0">
                        + Update
                      </Button>
                    } />
                    <DialogContent className="bg-white border-border rounded-2xl sm:max-w-md p-6">
                      <DialogHeader className="mb-4">
                        <DialogTitle className="text-2xl font-bold tracking-tight">Submit New Version</DialogTitle>
                        <DialogDescription className="text-muted-foreground">
                          Upload new screenshots and provide a changelog for your latest iteration.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-6">
                        <div>
                          <label className="text-sm font-bold tracking-wide mb-3 block">Version Number / Name</label>
                          <input type="text" className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary" placeholder="e.g. v2.1 or 'The Redesign'" />
                        </div>
                        <div>
                          <label className="text-sm font-bold tracking-wide mb-3 block">Date</label>
                          <input type="date" className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary" />
                        </div>
                        <div>
                          <label className="text-sm font-bold tracking-wide mb-3 block">Changelog</label>
                          <textarea className="w-full min-h-[120px] rounded-xl border border-border bg-transparent px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary resize-none" placeholder="What changed in this version?"></textarea>
                        </div>
                        <div>
                          <label className="text-sm font-bold tracking-wide mb-3 block">Upload Main Screenshot</label>
                          <div className="w-full border-2 border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center text-muted-foreground cursor-pointer hover:bg-secondary/50 transition-colors">
                            <span className="text-2xl mb-2">📸</span>
                            <span className="text-sm font-bold">Click to upload image</span>
                          </div>
                        </div>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-lg shadow-none h-14 mt-6">
                          Publish Update
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{domain}</h1>
              </div>
              <div className="flex items-center gap-4">
                <Dialog>
                  <DialogTrigger render={
                    <Button className="bg-black hover:bg-black/80 text-white rounded-full font-bold px-8 shadow-none h-12">
                      Give Feedback
                    </Button>
                  } />
                  <DialogContent className="bg-white border-border rounded-2xl sm:max-w-md p-6">
                    <DialogHeader className="mb-4">
                      <DialogTitle className="text-2xl font-bold tracking-tight flex items-center gap-2">
                        Feedback for Founder <Activity className="w-6 h-6 text-primary" />
                      </DialogTitle>
                      <DialogDescription className="text-muted-foreground">
                        Provide honest, actionable, and constructive feedback to help the founder improve their product.
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="text-sm font-bold tracking-wide mb-3 block">Design</label>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="w-6 h-6 text-border hover:fill-primary hover:text-primary cursor-pointer transition-colors" />
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-bold tracking-wide mb-3 block">Usability</label>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="w-6 h-6 text-border hover:fill-primary hover:text-primary cursor-pointer transition-colors" />
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-bold tracking-wide mb-3 block">Creativity</label>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="w-6 h-6 text-border hover:fill-primary hover:text-primary cursor-pointer transition-colors" />
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-bold tracking-wide mb-3 block">Content</label>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="w-6 h-6 text-border hover:fill-primary hover:text-primary cursor-pointer transition-colors" />
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border flex items-center justify-between">
                        <label className="text-sm font-bold tracking-wide">Would you use this product?</label>
                        <div className="flex gap-2 bg-secondary p-1 rounded-full">
                          <button className="px-6 py-1.5 rounded-full bg-white shadow-sm text-sm font-bold transition-all">Yes</button>
                          <button className="px-6 py-1.5 rounded-full text-muted-foreground hover:text-black text-sm font-bold transition-all">No</button>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <label className="text-sm font-bold tracking-wide mb-3 block">Constructive Feedback</label>
                        <textarea
                          className="w-full min-h-[120px] rounded-xl border border-border bg-transparent px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary resize-none"
                          placeholder="What specific advice do you have for the founder? Highlight what works well, and what could be improved..."
                        ></textarea>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <label className="text-sm font-bold tracking-wide mb-4 block">Select Labels</label>
                        <div className="flex flex-wrap gap-2">
                          {['Outdated', 'Good Idea', 'Clean UX'].map((label) => (
                            <Badge key={label} variant="outline" className="border-border rounded-full hover:border-black hover:text-black cursor-pointer transition-colors px-4 py-2 text-sm text-muted-foreground">
                              {label}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-lg shadow-none h-14 mt-6">
                        Send to Founder
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>

                <a href={`https://${domain}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full border border-border hover:bg-secondary transition-colors text-black">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Main Showcase */}
            <div className="aspect-[16/9] relative bg-secondary border border-border rounded-2xl overflow-hidden w-full">
              <Image
                src={activeData.image}
                alt={`${domain} main screenshot`}
                fill
                unoptimized
                className="object-cover"
                priority
              />
            </div>

            {activeTab === "Overview" ? (
              // Overview specific content
              <>
                {/* About */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 tracking-tight">About</h2>
                  <p className="text-muted-foreground leading-relaxed text-xl md:text-2xl max-w-4xl">
                    {activeData.about}
                  </p>
                </div>

                {/* Color Palette */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 tracking-tight">Color Palette</h2>
                  <div className="flex flex-wrap gap-6">
                    {[
                      { hex: '#000000', textClass: 'text-white' },
                      { hex: '#FFFFFF', textClass: 'text-black border border-border' },
                      { hex: '#7B3FF2', textClass: 'text-white' },
                      { hex: '#A3A3A3', textClass: 'text-white' },
                    ].map((color) => (
                      <div
                        key={color.hex}
                        className={`w-32 h-40 md:w-40 md:h-48 rounded-xl shadow-sm relative flex items-end p-4 ${color.textClass}`}
                        style={{ backgroundColor: color.hex }}
                      >
                        <span className="font-bold text-sm tracking-wide">{color.hex.toLowerCase()}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 tracking-tight">Technologies</h2>
                  <div className="flex flex-wrap gap-4">
                    {[
                      { name: 'Next.js', icon: Globe },
                      { name: 'React', icon: Atom },
                      { name: 'Tailwind CSS', icon: Palette },
                      { name: 'Vercel', icon: Triangle },
                      { name: 'Supabase', icon: Database },
                    ].map((tech) => (
                      <Badge key={tech.name} variant="outline" className="rounded-full text-base font-bold border-black/20 text-black px-8 py-5 bg-transparent hover:bg-secondary transition-colors flex items-center gap-2.5">
                        <tech.icon className="w-5 h-5 text-muted-foreground" />
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              // Version specific content
              <>
                {/* Changelog */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 tracking-tight">What's New in {activeTab}</h2>
                  <div className="text-muted-foreground leading-relaxed text-lg md:text-xl max-w-4xl space-y-4">
                    <p>{activeData.changelog}</p>
                  </div>
                </div>

                {/* Community Reviews (Fused) */}
                <div className="pt-4">
                  <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-dashed border-border pb-4 gap-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                      <h2 className="text-xl font-bold tracking-tight">Community Reviews for {activeTab}</h2>
                      <div className="flex gap-6">
                        <button className="text-sm font-bold text-muted-foreground hover:text-black transition-colors">Jury</button>
                        <button className="text-sm font-bold text-black border-b-2 border-black pb-1">Community Members</button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {activeData.reviews?.map((review: any, idx: number) => (
                      <div key={idx} className="border border-border p-6 md:p-8 rounded-2xl flex flex-col gap-6 hover:border-black/20 transition-colors">
                        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">

                          {/* User Info & Text */}
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-4">
                              <div className="w-12 h-12 rounded-full overflow-hidden border border-border relative shrink-0">
                                <Image src={review.avatar} alt={review.name} fill className="object-cover" unoptimized />
                              </div>
                              <div>
                                <p className="font-bold text-lg">{review.name}</p>
                                <p className="text-sm text-muted-foreground">from {review.country} • {review.date}</p>
                              </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-4">
                              "{review.text}"
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {review.tags.map((tag: string, tIdx: number) => (
                                <Badge key={tIdx} variant="outline" className="border-border text-sm font-bold px-4 py-1.5 text-muted-foreground bg-transparent">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Scores Breakdown */}
                          <div className="flex flex-col shrink-0 lg:w-64 bg-secondary/50 rounded-xl p-4 md:p-6 border border-border/50">
                            <div className="flex items-center justify-between mb-4 pb-4 border-b border-border/50">
                              <span className="font-bold">Overall</span>
                              <span className="font-bold text-2xl">{review.overall}</span>
                            </div>
                            <div className="space-y-3">
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Design</span>
                                <span className="font-bold">{review.design}</span>
                              </div>
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Usability</span>
                                <span className="font-bold">{review.usability}</span>
                              </div>
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Creativity</span>
                                <span className="font-bold">{review.creativity}</span>
                              </div>
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Content</span>
                                <span className="font-bold">{review.content}</span>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 lg:pl-12 pb-12">
            {activeTab === "Overview" ? (
              <div className="sticky top-24 space-y-12">
                <div className="p-8 border border-border border-dashed rounded-2xl flex flex-col items-center text-center justify-center text-muted-foreground gap-4 mt-8 bg-secondary/20">
                  <Activity className="w-8 h-8 opacity-20" />
                  <p className="font-bold text-sm">Select a specific version tab to view community scores and detailed feedback for that iteration.</p>
                </div>
              </div>
            ) : (
              <div className="sticky top-24 space-y-12">
                {/* Community Score (Like Sketch) */}
                <div className="pt-8">
                  <h2 className="text-2xl font-bold mb-8 tracking-tight">Community Score</h2>

                  <div className="space-y-6">
                    {[
                      { label: "Design", score: activeData.score?.design },
                      { label: "Usability", score: activeData.score?.usability },
                      { label: "Creativity", score: activeData.score?.creativity },
                      { label: "Content", score: activeData.score?.content },
                    ].map((item) => (
                      <div key={item.label} className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-bold tracking-wide">{item.label}</span>
                          <span className="text-sm font-bold">{item.score}</span>
                        </div>
                        <div className="w-full h-3 bg-secondary rounded-full relative overflow-hidden">
                          <div className="absolute top-0 left-0 h-full bg-black rounded-full" style={{ width: `${(item.score || 0 / 10) * 10}%` }}></div>
                        </div>
                      </div>
                    ))}

                    <div className="pt-4 flex items-center justify-between border-t border-border mt-6">
                      <span className="font-bold text-lg">Total Score</span>
                      <span className="font-bold text-3xl text-primary">{activeData.score?.overall}</span>
                    </div>
                  </div>

                  {/* Most Selected Label */}
                  <div className="mt-8 pt-8 border-t border-border">
                    <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-4">Community Pick</h3>
                    <div className="p-5 border border-border rounded-lg bg-white hover:border-black/30 transition-colors flex items-start gap-4 cursor-default">
                      <span className="text-4xl leading-none pt-0.5">{activeData.topLabel?.emoji}</span>
                      <div className="flex flex-col gap-1">
                        <span className="font-bold text-lg text-black leading-none">{activeData.topLabel?.title}</span>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                          {activeData.topLabel?.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>
        </div>

        {/* Explore More Collections / Other Websites */}
        <section className="border-t border-border pt-12 pb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold tracking-tight">Explore More Sites</h2>
            <Link href="/search" className="text-sm font-bold text-muted-foreground hover:text-black flex items-center">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Link href={`/site/example${i}.com`} key={i} className="group block">
                <div className="aspect-[4/3] bg-white border border-border rounded-2xl relative overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10" />
                  <Image
                    src={
                      i === 2
                        ? "https://i.pinimg.com/1200x/99/9b/8d/999b8dc5a3229b8148f5dd612ece8930.jpg"
                        : (i % 2 === 0 ? "/site_mockup_2_1777442025267.png" : "https://i.pinimg.com/1200x/99/9b/8d/999b8dc5a3229b8148f5dd612ece8930.jpg")
                    }
                    alt={`Example site ${i}`}
                    fill
                    unoptimized={i === 2 || i % 2 !== 0}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-bold text-lg tracking-tight group-hover:text-primary transition-colors">example{i}.com</h4>
                <p className="text-sm text-muted-foreground mt-1">By Studio {i}</p>
              </Link>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
