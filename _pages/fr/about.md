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

{% include stats-counters.html %}

{% include _includes/rec.html %}

{% include _includes/Parcours.html %}

{% include 3DViewer.html %}

<section class="reco-section">
    <div class="reco-header">
        <h2 class="reco-title"> Mon dernier post LinkedIn</h2>
        <p class="reco-subtitle">Restez informé de mes derniers projets et analyses techniques.</p>
    </div>

<div class="reco-grid-unique">
        <div class="reco-card-glass">
            <div class="linkedin-badge"><i class="fab fa-linkedin"></i> LinkedIn</div>
            <a href="https://www.linkedin.com/posts/omar-essalmani_utc-ensam-graduation-ugcPost-7407430842324553729-BBcX?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADLEUCcBZosRbAVy07EE8qdAr5_C6LA6Fpo" target="_blank">
                <img src="{{ '/assets/img/projects/Post.jpg' | relative_url }}" 
                     alt="Dernière publication LinkedIn de Omar ESSALMANI">
            </a>
        </div>
    </div>

<div class="text-center mt-4">
        <p class="text-muted" style="font-size: 0.85rem; font-style: italic;">
            Cliquez sur l'image pour voir le post original sur LinkedIn.
        </p>
    </div>
</section>

<section class="contact-section">
    <div class="contact-container">
        <h2 class="contact-title">Me Contacter</h2>
        <p class="contact-subtitle">Un projet en tête ? N'hésitez pas à m'envoyer un message.</p>
        
        <form id="contact-form" class="contact-form">
            <div class="input-group">
                <input type="text" name="name" placeholder="Votre Nom" required>
            </div>
            <div class="input-group">
                <input type="email" name="email" placeholder="Votre Email" required>
            </div>
            <div class="input-group">
                <textarea name="message" rows="5" placeholder="Votre Message" required></textarea>
            </div>
            <button type="submit" class="submit-btn" id="submit-btn">
                <span>Envoyer le message</span>
            </button>
        </form>
    </div>
</section>

<script>
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Désactiver le bouton et afficher le loading
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
        const btnText = submitBtn.querySelector('span');
        const originalText = btnText.textContent;
        btnText.textContent = 'Envoi en cours...';
        btnText.style.opacity = '0';

        // Récupérer les données du formulaire
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/xojqonlr', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Succès !
                showNotification('✓', 'Message envoyé avec succès !', 'success');
                form.reset();
            } else {
                // Erreur du serveur
                showNotification('✗', 'Oups ! Une erreur est survenue.', 'error');
            }
        } catch (error) {
            // Erreur réseau
            console.error('Erreur:', error);
            showNotification('✗', 'Erreur réseau. Veuillez réessayer.', 'error');
        } finally {
            // Réactiver le bouton
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
            btnText.textContent = originalText;
            btnText.style.opacity = '1';
        }
    });

    function showNotification(icon, message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <span class="notification-icon">${icon}</span>
            <span>${message}</span>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => notification.classList.add('show'), 10);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
</script>