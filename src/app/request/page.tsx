import Header from "@/components/Header";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function RequestAuditPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-2xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Request an Audit</h1>
          <p className="text-muted-foreground text-lg">Submit your site to get actionable feedback from the community.</p>
        </div>

        <form className="space-y-8 bg-white p-8 border border-border shadow-sm rounded-2xl">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="url" className="text-base font-semibold">Website URL</Label>
              <Input id="url" name="url" placeholder="https://yourdomain.com" required className="h-12 rounded-xl border-border focus-visible:ring-1 focus-visible:ring-primary" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-base font-semibold">Brief Description</Label>
              <Textarea 
                id="description" 
                name="description" 
                placeholder="What does your site do? What kind of feedback are you looking for?" 
                rows={4}
                required
                className="rounded-xl border-border focus-visible:ring-1 focus-visible:ring-primary resize-none"
              />
            </div>
            
            <div className="space-y-2">
              <Label className="text-base font-semibold">Labels (Optional)</Label>
              <Input name="labels" placeholder="e.g. SaaS, FinTech, Needs Feedback (comma separated)" className="h-12 rounded-xl border-border focus-visible:ring-1 focus-visible:ring-primary" />
            </div>
          </div>

          <Button type="submit" className="w-full h-14 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-none">
            Submit for Review
          </Button>
        </form>
      </main>
    </div>
  );
}
