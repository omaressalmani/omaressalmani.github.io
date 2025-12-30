---
layout: about
title: À propos
permalink: /fr/
# subtitle: <a href='#'>Affiliations</a>. Adresse. Contacts. Devise. Etc.

profile:
  align: right
  image: AI.png
  image_circular: true # recadre l'image pour la rendre circulaire

selected_papers: false # inclut une liste d'articles marqués comme "selected={true}"
social: true # inclut les icônes sociales en bas de la page

announcements:
  enabled: false # inclut une liste d'actualités
  scrollable: false # ajoute une barre de défilement verticale s'il y a plus de 3 éléments
  limit: 5 # laisser vide pour inclure toutes les actualités du dossier `_news`
---

<p>
    Je suis <strong>Omar ESSALMANI</strong>, un ingénieur mécanicien hautement qualifié et orienté résultats.  
    Je détiens un prestigieux <strong>double diplôme</strong> de l' 
    <strong>Université de Technologie de Compiègne (UTC)</strong> 🇫🇷 et de l' 
    <strong>École Nationale Supérieure d'Arts et Métiers (ENSAM-R)</strong> 🇲🇦.
</p>

<p>
    Spécialisé en <strong>Conception Mécanique Intégrée</strong> ainsi qu'en 
    <strong>Conception et Simulation Mécanique</strong>, 
    je possède une expertise étendue sur l'ensemble du cycle de vie des produits, du concept initial à la fabrication.  
    Mes compétences techniques clés incluent la maîtrise de :  
    <ul>
      <li><strong>CAO (CAD) :</strong> CATIA V5, SolidWorks, Creo, 3DEX, Fusion 360</li>
      <li><strong>Simulation :</strong> Ansys, Abaqus</li>
      <li><strong>FAO (CAM) :</strong> TopSolid, SolidWorks, Fusion 360, CATIA V5, 3DEX et ESPRICAM</li>
      <li><strong>Programmation :</strong> VBA, HTML, VS code, Arduino, C et Python</li>
      <li><strong>Choix des matériaux :</strong> CES Edupack</li>
      <li><strong>Bureautique :</strong> Excel, Word, PowerPoint, Teams et Access</li>
      <li><strong>Ingénierie système :</strong> Windchill, CATIA Magic, PLM</li>
    </ul>  
    
    {% include cad-tools-ticker.html %}

    Je dispose également d'une solide expérience en <strong>analyse mécanique (FEA)</strong>, 
    <strong>Cotation Fonctionnelle ISO (GPS)</strong>, et calculs de <strong>chaînes de cotes (Stack-UP)</strong>. Je suis responsable de la préparation de documentations techniques (<strong>DDR – Design Detail Review</strong>, <strong> DJD – Design Justification Document) </strong>, du développement de protocoles de test, de la gestion de projets, et de l'application des principes de Design for Cost et Manufacturing. Je maîtrise également les études de faisabilité et les normes critiques telles que l'<strong>IEC 60601</strong> et les <strong>Eurocodes</strong>.
</p>

<p>
  Quand je ne suis pas en train de concevoir, vous me trouverez probablement sur un terrain de football, en train de monter des vidéos ou de bricoler des composants électroniques pour leur redonner vie.
</p>

<p>
  N'hésitez pas à me contacter !
</p>
  
<hr class="my-5">

<div class="text-center my-5">
  <h3 class="mb-3">💬 Recommandation Professionnelle</h3>
  <p class="text-muted mb-4">
    Une référence issue de ma récente expérience en tant qu'<strong>Ingénieur Stagiaire Mécanicien chez Guerbet</strong>,
    partagée sur mon profil LinkedIn.
  </p>

  <a href="https://www.linkedin.com/in/omar-essalmani/" target="_blank" style="text-decoration: none;">
    <img 
      src="{{ '/assets/img/projects/recommendation.png' | relative_url }}" 
      alt="Recommandation LinkedIn pour Omar ESSALMANI" 
      class="rounded shadow-lg" 
      style="width:100%; max-width:750px; height:auto; border:1px solid #444;">
  </a>

  <p class="text-muted mt-2" style="font-size: 0.9rem;">
    Cliquez sur l'image pour voir la recommandation complète sur LinkedIn.
  </p>
</div>

<hr class="my-5">

<div class="text-center my-5">
  <h3 class="mb-3">🌐 Mon Dernier Post LinkedIn</h3>

  <a href="https://www.linkedin.com/posts/omar-essalmani_ingaeznierie-programmation-conceptionmaezcanique-activity-7391136624878862336-ax1C?utm_source=share&utm_medium=member_desktop&rcm=ACoAADLEUCcBZosRbAVy07EE8qdAr5_C6LA6Fpo" 
     target="_blank" 
     style="text-decoration: none;">
     
    <img 
  src="{{ '/assets/img/projects/Post.jpg' | relative_url }}" 
  alt="Post LinkedIn par Omar ESSALMANI" 
  class="rounded shadow-lg" 
  style="width:90%; max-width:900px; height:auto; border: 1px solid #444;">
</a>

  <p class="text-muted mt-2" style="font-size: 0.9rem;">
    Cliquez sur l'image pour lire le post complet sur LinkedIn.
  </p>
</div>
<section class="contact-section">
    <div class="contact-container">
        <h2 class="contact-title">Me Contacter</h2>
        <p class="contact-subtitle">Un projet en tête ? N'hésitez pas à m'envoyer un message.</p>
        
        <form action="https://formspree.io/f/votre_id" method="POST" class="contact-form">
            <div class="input-group">
                <input type="text" name="name" placeholder="Votre Nom" required>
            </div>
            <div class="input-group">
                <input type="email" name="email" placeholder="Votre Email" required>
            </div>
            <div class="input-group">
                <textarea name="message" rows="5" placeholder="Votre Message" required></textarea>
            </div>
            <button type="submit" class="submit-btn">Envoyer le message</button>
        </form>
    </div>
</section>
/* Section Contact */
.contact-section {
    width: 100%;
    padding: 80px 0;
    display: flex;
    justify-content: center;
    background: transparent;
}

.contact-container {
    width: 90%;
    max-width: 600px;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(15px);
    padding: 40px;
    border-radius: 24px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.3);
    text-align: center;
}

/* Mode sombre pour le contact */
[data-theme='dark'] .contact-container {
    background: rgba(45, 45, 50, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
}

.contact-title {
    font-size: 2rem;
    margin-bottom: 10px;
    color: #333;
}

[data-theme='dark'] .contact-title { color: #fff; }

.contact-subtitle {
    color: #666;
    margin-bottom: 30px;
}

[data-theme='dark'] .contact-subtitle { color: #bbb; }

/* Formulaire */
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.input-group input, .input-group textarea {
    width: 100%;
    padding: 15px;
    border-radius: 12px;
    border: 1px solid rgba(0, 123, 255, 0.2);
    background: rgba(255, 255, 255, 0.5);
    outline: none;
    transition: all 0.3s;
    font-family: inherit;
}

[data-theme='dark'] .input-group input, 
[data-theme='dark'] .input-group textarea {
    background: rgba(30, 30, 35, 0.5);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.input-group input:focus, .input-group textarea:focus {
    border-color: #007bff;
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.2);
}

/* Bouton Envoyer avec l'effet de lueur */
.submit-btn {
    padding: 15px;
    border-radius: 12px;
    border: none;
    background: linear-gradient(90deg, #007bff, #00c6ff);
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.4s;
    box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
}

.submit-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 123, 255, 0.5);
    filter: brightness(1.1);
}