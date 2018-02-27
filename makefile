# node modules in executable path
PATH := node_modules/.bin:$(PATH)

# OSX requires this variable exported so that PATH is also exported.
SHELL := /bin/bash

JS_SRC = $(shell find . -type f -name '*.js' ! -path './node_modules/*' ! -path './assets/js/*')

.PHONY: lint build

lint:
	eslint ${JS_SRC} ${ESLINT_ARGS}