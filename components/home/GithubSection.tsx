import { GitHubCalendar } from "react-github-calendar";

export function GithubSection() {
    return (
        <section id="github" className="mt-16 space-y-6">
            <div className="flex items-center gap-3">
                <span className="h-[1px] w-10 bg-gradient-to-r from-transparent via-[var(--muted)]/40 to-transparent" />
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">GitHub Contributions</p>
            </div>
            <div className="overflow-x-auto flex justify-center">
                <GitHubCalendar
                    username="khenshi"
                    colorScheme="dark"
                    blockSize={13}
                    blockMargin={4}
                    fontSize={14}
                />
            </div>
        </section>
    );
}