#!/usr/bin/env bash

if command -v presetter &> /dev/null; then
    # shellcheck disable=SC2154
    if [ -e "${npm_config_local_prefix}/node_modules/presetter-preset-strict" ]; then
        presetter bootstrap
    fi

fi
