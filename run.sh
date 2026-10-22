#!/bin/bash

# Local vs. Runner Environment
if [ -f .env ]; then
	echo "Loading environment variables from .env file"
	source .env 
else
	echo "No .env file found. loading directly from terminal environment variables"
fi



# Set default values for environment variables if not already set
export RENOVATE_CONFIG_FILE=${RENOVATE_CONFIG_FILE:-./config.js}
export GH_TOKEN_READ_ONLY=${GH_TOKEN_READ_ONLY:-$GH_TOKEN}
export RENOVATE_TOKEN=${RENOVATE_TOKEN:-false}
export RENOVATE_GIT_AUTHOR=${RENOVATE_GIT_AUTHOR:-"Renovate Bot <renovate-bot@mishracloud.com>"}
export RENOVATE_ONBOARDING=${RENOVATE_ONBOARDING:-true}
export LOG_FILE=${LOG_FILE:-./renovate.log}
export GITHUB_COM_TOKEN=${GITHUB_COM_TOKEN:-$GH_TOKEN_READ_ONLY}

# ./node_modules/.bin/renovate
npx renovate --config-validation-error --trace-warnings
