module.exports = {
    "configValidationError": true,
    "endpoint": "https://git.mishracloud.com/api/v1",
    "gitAuthor": "Renovate Bot <renovate-bot@mishracloud.com>",
      "reviewers": [
      "pranavmishra90"
    ],
    "platform": "forgejo",
    "autodiscover": true,
    "autodiscoverFilter": ["MishraCloud/*"],
    "optimizeForDisabled": true,
  
    "onboarding": true,
    "onboardingAutoCloseAge": 100,
    "onboardingConfigFileName": ".renovaterc.json",
    "onboardingRebaseCheckbox": true,
    "token": process.env.RENOVATE_TOKEN,
    "dependencyDashboard": true,
    
    "extends": [
      ":semanticCommits",
      ":semanticCommitTypeAll(ci)",
      
      ":dependencyDashboard",
      
      "docker:pinDigests", 
      "helpers:pinGitHubActionDigests", 
      ":configMigration", 
      ":pinDevDependencies", 
      "abandonments:recommended", 
      "security:minimumReleaseAgeNpm", 
      ":maintainLockFilesWeekly",
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
      "helpers:renovateChangelog" 
  ]
};
