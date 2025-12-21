---
layout: page
title: Projets
permalink: /fr/
description: Une collection de mes réalisations techniques et explorations créatives.
nav: false
display_categories: [work, certifications, fun]
horizontal: false
---

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  {% for category in page.display_categories %}
    <div class="category-section mb-5">
      <a id="{{ category }}" href=".#{{ category }}" style="text-decoration: none;">
        <h2 class="category-title" style="border-left: 4px solid #007bff; padding-left: 15px; font-weight: 300; text-transform: uppercase; letter-spacing: 2px;">
          {% if category == "work" %} Expériences Pro
          {% elsif category == "fun" %} Lab Créatif
          {% elsif category == "certifications" %} Certifications
          {% else %}{{ category }}{% endif %}
        </h2>
      </a>
      
      <p class="text-muted mb-4" style="font-size: 0.9rem; margin-left: 19px;">
        {% if category == "work" %} Conception mécanique, analyses FEA et intégrations industrielles.
        {% elsif category == "fun" %} Expérimentations personnelles en électronique et code.
        {% elsif category == "certifications" %} Diplômes et badges officiels (SAP, etc.).
        {% endif %}
      </p>

      {% assign categorized_projects = site.projects | where: "category", category | where: "lang", "fr" %}
      {% assign sorted_projects = categorized_projects | sort: "importance" %}

      <div class="row row-cols-1 row-cols-md-3 g-4">
        {% for project in sorted_projects %}
          {% include projects.liquid %}
        {% endfor %}
      </div>
    </div>
  {% endfor %}
{% endif %}
</div>