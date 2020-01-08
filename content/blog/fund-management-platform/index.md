---
title: Fund Management Platform
date: "2019-07-14T22:12:03.284Z"
description: "Fund management platform through a combination of content management system, sales and marketing automation software, and membership plugin. "
tags: ["wordpress"]
draft: false
---

![Affluence](./affluence.jpg)

Affluence is a fund management company focused on delivering superior long-term investment performance
from the best Australian fund managers. In this post I am going to review how we created such a platform for them.

### Wordpress as CMS

We initially created a Wordpress website for them that displays their about information, blog posts, and contact information, and provides an interface so that the client can easily update its content. Down the line they wanted to integrate a membership system to the website as well. This website also captures leads from opt-in forms via <a href="https://www.gravityforms.com">GravityForms</a>, and those e-mails go to...

### Infusionsoft as CRM

Affluence has been using <a href="https://keap.com/infusionsoft" target="_blank">Infusionsoft</a> (now called <em>Infusionsoft by Keap</em>) as their CRM software. Infusionsoft has been around for quite a while and has always been a top choice when it comes to CRM. Now the only thing that's left is how to bridge the website or CMS (Wordpress) and customer information (or site members) together, and that's how we came upon...

### Memberium as membership plugin

We chose <a target="_blank" href="http://memberium.com/">Memberium</a> as it seamlessly integrates with <a href="https://keap.com/infusionsoft" target="_blank">Infusionsoft</a>, the marketing platform that Affluence was already using prior to their website. Memberium is the first thing that comes up when you look for Wordpress-Infusionsoft membership solutions. Through this Wordpress plugin, we were able to sync the data from Wordpress to Infusionsoft and vice versa, which enabled their customers to login with their existing Infusionsoft data onto the Affluence website.

### The Platform

The platform works well and serves as the user's dashboard and allows them to view how their investment portfolio is performing. This fetches data from Infusionsoft and shows different figures like amount invested, date of transaction, etc. It also allows the user to update specific data related to their profile and investment - and any changes made on the dashboard is synced to Infusionsoft.