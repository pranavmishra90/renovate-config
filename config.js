module.exports = {
    "configValidationError": true,
    "endpoint": "https://git.mishracloud.com/api/v1",
    "gitAuthor": "Renovate Bot <renovate-bot@mishracloud.com>",
    "platform": "forgejo",
    "autodiscover": true,
    "autodiscoverFilter": ["MishraCloud/renovate-config", "FacsimiLab/*"],
    "optimizeForDisabled": false,
    "token": process.env.RENOVATE_TOKEN
};
