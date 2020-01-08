---
title: Modern Wordpress Workflow
date: "2019-07-23T22:40:32.169Z"
description: My 2019 Wordpress workflow- how I initialize, develop, and deploy.
tags: ["wordpress"]
draft: false
---

Today I want to explain my current Wordpress workflow in detail. I'm always on
the lookout on how to improve my development tools so there's a chance that
this post might be inaccurate, but I'll try to keep this post updated.

### Local Wordpress Environment

I tried using <a href="https://varyingvagrantvagrants.org/" target="_blank">VVV
</a> but found it too large-scale for my development purposes. Starting up Vagrant
takes too much time especially if you're only booting up one Wordpress install.
But I think it's perfect if you have several Wordpress installs in one Vagrant
configuration.

I found <a href="https://github.com/10up/wp-local-docker-v2" target="_blank">
WP Local Docker</a> to be the smaller yet as efficient brother of VVV, since
starting up a Docker container using the `10updocker start` command is way
faster than `vagrant up`.

For some reason one of my `10updocker` installs suddenly slowed down, so I had
no choice but to find an alternative for the meantime. This is where I found
<a href="https://localbyflywheel.com/" target="_blank">Local by Flywheel</a> to
be a worthy solution as it's really fast and has a
friendly graphical UI - which is a plus for them (even though I'm more inclined
towards command-line interfaces).

_Fun fact:_ <a href="https://varyingvagrantvagrants.org/" target="_blank">VVV</a>
_and_ <a href="https://github.com/10up/wp-local-docker-v2" target="_blank">
WP Local Docker</a> _are projects that both started in the
company_ <a href="https://10up.com/" target="_blank">10up</a>, _so kudos to you
guys!_

### NPM packages

Recently most of what I do requires building on our in-house Wordpress theme and
plugins, and since our SASS files are handled by
<a href="https://github.com/ConnectThink/WP-SCSS" target="_blank">WP-SCSS</a>
for easier client customizations, <a href="https://www.browsersync.io/"
target="_blank"> Browsersync</a> is the package that I mostly use in Wordpress
development.

### Better option than page builders

We've stopped using page builders because a) major strides are being done in
<a href="https://wordpress.org/gutenberg/" target="_blank">Gutenberg</a>,
removing the need for third-party page builders and b) most page builders are
bloated in nature.

We would've opted for Gutenberg if not for how it currently handles row and
column layouts, which is a limiting factor for us in delivering varying layouts
to our Wordpress builds. But I'm sure they will address this pretty soon, so
until then...

We've chosen <a href="https://www.advancedcustomfields.com/" target="_blank">
Advanced Custom Fields</a> because of its sheer power to customize
Wordpress to your needs. It also allowed us to create re-usable templates that
we can build on and track with version control - something that doesn't feel
natural with page builders like Visual Composer.

### Syncing databases

This has always been the issue in having a modern Wordpress workflow - how
do you handle database changes? Our solution for this is
<a href="https://deliciousbrains.com/wp-migrate-db-pro/" target="_blank">
WP Migrate DB Pro</a>. It allows us to sync changes from local to production,
and vice versa. There's also a free alternative - <a target="_blank" href="
https://github.com/wp-sync-db/wp-sync-db">WP Sync DB</a> - and there's something
weird going on between them as this free and paid solutions look a lot alike,
but I'll let you figure that out yourself.

### Conclusion

I'm pretty sure there are other better workflows out there as far as Wordpress
is concerned, but for my usage, this workflow allows me to focus on translating
wireframes into actual code, without my tooling or configurations getting in my
way.