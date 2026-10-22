module.exports = {
  configValidationError: true,
  reviewers: ["pranavmishra90", "mira-mishracloud"],
  platform: "github",
  autodiscover: false,
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
      automerge: false,
    },
    {
      description: "Automerge Docker updates",
      matchDatasources: ["docker"],
      matchUpdateTypes: ["pin", "minor", "patch"],
      automerge: false
    },
    {
      description: "GitHub / Forgejo Actions updates",
      matchManagers: ["github-actions"],
      matchUpdateTypes: ["pin", "minor", "patch"],
      matchCurrentVersion: "!/^0/",
      automerge: false,
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
