---
layout: page
title: Projects
permalink: /projects/
description: A collection of my technical achievements and creative explorations.
nav: true
nav_order: 3
display_categories: [work, certifications, fun]
horizontal: false
---

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  {% for category in page.display_categories %}
    <div class="category-section mb-5">
      <a id="{{ category }}" href=".#{{ category }}" style="text-decoration: none;">
        <h2 class="category-title" style="border-left: 4px solid #007bff; padding-left: 15px; font-weight: 300; text-transform: uppercase; letter-spacing: 2px;">
          {% if category == "work" %} Engineering Experience
          {% elsif category == "fun" %} Creative Lab
          {% elsif category == "certifications" %} Certifications
          {% else %}{{ category }}{% endif %}
        </h2>
      </a>
      
      <p class="text-muted mb-4" style="font-size: 0.9rem; margin-left: 19px;">
        {% if category == "work" %} Mechanical design, FEA analysis, and industrial integration.
        {% elsif category == "fun" %} Personal experiments in electronics and coding.
        {% elsif category == "certifications" %} Official diplomas and badges (SAP, Dassault Systèmes, etc.).
        {% endif %}
      </p>

      {% assign categorized_projects = site.projects | where: "category", category | where: "lang", "en" %}
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