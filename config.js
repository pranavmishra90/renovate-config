module.exports = {
  configValidationError: true,
  endpoint: "https://git.mishracloud.com/api/v1",
  gitAuthor: "Renovate Bot <renovate-bot@mishracloud.com>",
  reviewers: ["pranavmishra90"],
  platform: "forgejo",
  autodiscover: true,
  optimizeForDisabled: true,

  onboarding: true,
  onboardingAutoCloseAge: 100,
  onboardingConfigFileName: ".renovaterc.json",
  onboardingRebaseCheckbox: true,
  token: process.env.RENOVATE_TOKEN,
  dependencyDashboard: true,

  ignoreTests: true,
  packageRules: [
    {
      description: "Automerge non-major updates",
      matchUpdateTypes: ["minor", "patch"],
      matchCurrentVersion: "!/^0/",
      automerge: true,
    },
    {
      description: "Automerge Docker digest updates",
      matchDatasources: ["docker"],
      matchUpdateTypes: ["pin", "minor", "patch", "digest"],
      automerge: true
    },
    {
      description: "Automerge GitHub / Forgejo Actions updates",
      matchManagers: ["github-actions"],
      matchUpdateTypes: ["pin", "minor", "patch", "digest"],
      matchCurrentVersion: "!/^0/",
      automerge: true,
    },
  ],

  extends: [
    ":semanticCommits",
    ":semanticCommitTypeAll(ci)",

    ":dependencyDashboard",

    ":semanticPrefixFixDepsChoreOthers",
    ":ignoreModulesAndTests",

    "group:monorepos",
    "group:recommended",

    "mergeConfidence:age-confidence-badges",

    "replacements:all",
    "workarounds:all",

    "helpers:forgejoDigestChangelogs",
    "helpers:giteaDigestChangelogs",
    "helpers:githubDigestChangelogs",
    "helpers:gitlabDigestChangelogs",
    "helpers:goXPackagesChangelogLink",
    "helpers:goXPackagesNameLink",
    "helpers:renovateChangelog",

    "docker:pinDigests",
    "helpers:pinGitHubActionDigests",
    ":configMigration",
    ":pinDevDependencies",
    "abandonments:recommended",
    "security:minimumReleaseAgeNpm",
    ":maintainLockFilesWeekly",
  ],
};
