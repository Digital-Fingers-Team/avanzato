export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-muted/20 border-t-accent-purple"></div>
    </div>
  );
}
