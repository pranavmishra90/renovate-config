module.exports = {
    "configValidationError": true,
    "endpoint": "https://git.mishracloud.com/api/v1",
    "gitAuthor": "Renovate Bot <renovate-bot@mishracloud.com>",
    "platform": "forgejo",
    "autodiscover": true,
    "autodiscoverFilter": ["MishraCloud/*", "FacsimiLab/*", "Facsimilab-Rush/*", "pranavmishra90/*"],
    "optimizeForDisabled": true,
    "onboarding": true,
    "onboardingAutoCloseAge": 100,
    "onboardingConfigFileName": ".renovaterc.json",
    "onboardingRebaseCheckbox": true,
    "token": process.env.RENOVATE_TOKEN
};
