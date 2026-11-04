# Design inputs

Decisions and questions gathered during requirements, to carry into the design iteration. The brief says *what* the system does; this file collects *how* questions so none are lost. Once an item is decided, it moves into an ADR and is ticked here.

## Workflow (agreed)

- [x] Code is hosted on GitHub only.
- [x] GitHub Flow: a short-lived branch per change, merged to `main` through a pull request.
- [x] Commit messages follow Conventional Commits (`feat:`, `fix:`, `docs:`, `test:`, `refactor:`).
- [x] One feature in progress at a time. Parallel AI work (several branches or PRs at once) only when I decide to allow it, recorded in an iteration review.
- [x] Features are tested in the local development environment before merge, then on staging after merge.
- [x] Merging to `main` deploys to staging. No separate environment branches.
- [x] Staging keeps one long-lived database, changed only by migrations, so integrity problems with existing data show up.

## Open: to decide in the design iteration

**Data and time**

- [ ] Data model.
- [ ] Time model. The kinds of time in the system: the night (a date), arrival deadlines, the overdue time limit, fixed local times (10:15pm closing check, 10:30pm cut-off), and when something was recorded. How each is stored, and how they behave across a BST change when the server runs in UTC.

**Stack**

- [ ] Framework.
- [ ] Data access and database.
- [ ] Validation at the API boundary.
- [ ] Testing strategy, including automated smoke tests that run after each staging deploy.

**Environments and hosting**

- [ ] Hosting for staging. Requirement: cheap to run indefinitely, since a portfolio needs to stay up for years.
- [ ] Migrations and rollback: how a bad migration is undone.
- [ ] Local development environment that matches staging: same database engine and version, same Node version, same time zone setting. Containers are an option; the development machine has 8GB RAM.
- [ ] Whether staging doubles as the public demo, or a separate production environment is needed.

**Public demo**

- [ ] Demo logins: one allocator, one location.
- [ ] A seeded synthetic night with allocations in each status, reset to a known state on a schedule.
- [ ] Security for a public app with logins: rate limiting, no real accounts, nothing reusable.

**Repository and AI tooling**

- [ ] Replace real location and organisation names with fictional ones before the repo goes public.
- [ ] Make the repo public, so GitHub rulesets (branch protection, automatic Copilot review) are enforced.
- [ ] Branch protection on `main`: require a pull request, 0 approvals, block force pushes; require status checks once CI exists.
- [ ] How AI involvement is marked: commit trailer, PR template checkbox, or both. Update ADR-0000 to match.
- [ ] PR template: business rules covered, tests added, AI used and for what, anything uncertain.
- [ ] `CLAUDE.md` skeleton and `.github/copilot-instructions.md`, both pointing reviewers at the business rules.
- [ ] README.

**Later**

- [ ] Reporting tool for nightly and trend reports (possibly a Rust CLI), once there is data to report on.
