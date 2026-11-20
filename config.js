module.exports = {
  configValidationError: true,
  platform: "github",

  // ==========================================
  // Repository Discovery
  // ==========================================

  autodiscover: true,

  autodiscoverFilter: ["!prrx1*", "!rpds*"],

  optimizeForDisabled: true,

  // ==========================================
  // Onboarding
  // ==========================================

  onboarding: true,
  onboardingAutoCloseAge: 30,
  onboardingConfigFileName: ".renovaterc.json",
  onboardingRebaseCheckbox: true,

  // ==========================================
  // PR Configuration
  // ==========================================

  reviewers: ["pranavmishra90"],

  dependencyDashboard: false,

  // ==========================================
  // Remaining packageRules and extends
  // ==========================================

  lockFileMaintenance: {
    enabled: true,
  },

  packageRules: [
    // 1. Automatically pin digests; automerge the pinning PR
    {
      groupName: "Pin dependency digests",
      description: "Automerge digest pinning",
      matchUpdateTypes: ["pinDigest"],
      automerge: true,
    },

    // 2. Automerge digest updates for Docker images only
    {
      groupName: "Docker digest updates",
      description: "Automerge Docker digest updates",
      matchDatasources: ["docker"],
      matchUpdateTypes: ["digest"],
      automerge: true,
    },

    // 3. Major updates: separate PR group, manual merge
    {
      groupName: "Major dependency updates",
      description: "Group major updates",
      matchUpdateTypes: ["major"],
      automerge: false,
    },

    // 4. Minor and patch updates: combined PR group, manual merge
    {
      groupName: "Minor and patch dependency updates",
      description: "Group minor and patch updates",
      matchUpdateTypes: ["minor", "patch"],
      automerge: false,
    },

    // 5. Replacements: separate PR group, manual merge
    {
      groupName: "Dependency replacements",
      description: "Group replacement updates",
      matchUpdateTypes: ["replacement"],
      automerge: false,
    },

    // 6. Python dependency bumps from pyproject.toml, manual merge
    {
      groupName: "Python dependency bumps",
      description: "Python dependency bumps require review",
      matchUpdateTypes: ["bump"],
      matchFileNames: ["**/pyproject.toml"],
      automerge: false,
    },

    // 7. Automerge maintenance for selected lockfiles
    {
      groupName: "Lockfile maintenance",
      description: "Automerge selected lockfile maintenance",
      matchUpdateTypes: ["lockFileMaintenance"],
      matchFileNames: ["**/uv.lock", "**/package-lock.json"],
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
  ],
};