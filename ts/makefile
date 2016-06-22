# Makefile for the typescript build and test, coverage

ROOT := $(realpath ../)
TSDIR := $(ROOT)/ts

# add node modules path
PATH := $(ROOT)/node_modules/.bin:$(PATH)

# command alias
BROWSER = vivaldi
TSC = tsc
BROWSERIFY = browserify
TEST = mocha

TARGET = $(ROOT)/public/javascripts/main.js

# source code
SRCDIR = $(TSDIR)/src
SRC = $(wildcard $(SRCDIR)/*.ts)
SRCJS = $(SRC:.ts=.js)
SRCMAP = $(SRC:.ts=.js.map)

# test code
SPECDIR = $(TSDIR)/spec
SPEC = $(wildcard $(SPECDIR)/*.ts)
SPECJS = $(SPEC:.ts=.js)
SPECMAP = $(SPEC:.ts=.js.map)
SPECFILES = $(SPECDIR)/*_spec.js

# coverage
COVERAGEDIR = $(TSDIR)/coverage

# tsc options
TSFLAGS = --sourceMap --module commonjs --target ES5 --removeComments

.PHONY: all init clean test coverage print-vars

$(TARGET): $(SRCJS)
	$(BROWSERIFY) $(SRCDIR)/startup.js -o $(TARGET)

$(SRCDIR)/%.js: $(SRCDIR)/%.ts
	$(TSC) $(TSFLAGS) $<

# make test
test: $(SPECJS)
	$(TEST) $(SPECJS)

$(SPECDIR)/%.js: $(SPECDIR)/%.ts
	$(TSC) $(TSFLAGS) $<

# make all
all: clean $(TARGET)

# make coverage
coverage: $(SPECJS)
	istanbul cover _mocha -- $(SPECFILES)
	cd $(COVERAGEDIR); $(ROOT)/node_modules/.bin/remap-istanbul -i coverage.json -o html-report -t html
	$(BROWSER) $(COVERAGEDIR)/html-report/index.html

# make init
init:
	typings install

# make clean
clean:
	-rm -rf $(TARGET) $(SPECMAP) $(SRCMAP) $(SPECJS) $(SRCJS)

print-vars:
	@$(foreach v,$(.VARIABLES),$(info $v=$($v)))
