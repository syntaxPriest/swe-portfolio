export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg)]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-6 h-6 rounded-full border-2 border-[var(--ink)] border-t-transparent animate-spin" />
        <p className="text-[13px] text-[var(--ink-mute)] font-medium">Loading</p>
      </div>
    </div>
  );
}
