import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <header className="border-b border-border bg-white sticky top-0 z-50">
      <div className="w-full px-4 md:px-8 lg:px-12 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight flex items-center">
            rev<span className="text-primary font-medium">v</span>view
          </span>
        </Link>
        <div className="flex-1 max-w-xl mx-8 hidden md:block">
          <form action="/search" className="relative group">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <Input
              name="q"
              type="search"
              placeholder="Search domains, founders, or labels..."
              className="pl-10 h-10 bg-white border-border rounded-full focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary shadow-sm text-base"
            />
          </form>
        </div>
        <div>
          <Link href="/request">
            <Button className="rounded-full bg-primary hover:bg-primary/90 text-white font-medium shadow-sm h-10 px-6">
              Request Audit
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
