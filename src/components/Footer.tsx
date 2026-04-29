import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white mt-auto">
      <div className="w-full px-4 md:px-8 lg:px-12 py-12 flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <Link href="/" className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-bold tracking-tight flex items-center">
              rev<span className="text-primary font-medium">v</span>view
            </span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs">
            The request-first marketplace for high-fidelity website audits and community feedback.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full md:w-auto">
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-sm tracking-wide">Platform</h4>
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            <Link href="/search" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Explore</Link>
            <Link href="/request" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Submit Site</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-sm tracking-wide">Resources</h4>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Community</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Guidelines</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-sm tracking-wide">Legal</h4>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </div>
      <div className="w-full px-4 md:px-8 lg:px-12 py-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground font-medium tracking-wide">© {new Date().getFullYear()} Revvview. All Rights Reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-xs font-bold text-muted-foreground hover:text-foreground transition-colors">Twitter</Link>
          <Link href="#" className="text-xs font-bold text-muted-foreground hover:text-foreground transition-colors">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}
