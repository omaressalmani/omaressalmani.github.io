---
layout: about
title: About
permalink: /
# subtitle: <a href='#'>Affiliations</a>. Address. Contacts. Motto. Etc.

profile:
  align: right
  image: AI.png
  image_circular: true # crops the image to make it circular
 

selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: false # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

---

<p>
    I am <strong>Omar ESSALMANI</strong>, a highly skilled and results-driven Mechanical Engineer.  
    I hold a prestigious <strong>dual degree</strong> from 
    <strong>Université de Technologie de Compiègne (UTC)</strong> 🇫🇷 and 
    <strong>École Nationale Supérieure D'arts et Métiers (ENSAM-R)</strong> 🇲🇦.
  </p>

  <p>
    Specialized in <strong>Integrated Mechanical Design</strong> and 
    <strong>Mechanical Design and Simulation</strong>, 
    I have extensive expertise throughout the product lifecycle, from initial concept to manufacturing.  
    My core technical skills include proficiency in:  
    <ul>
      <li><strong>CAD :</strong> CATIA V5, SolidWorks, Creo, 3DEX, Fusion 360</li>
      <li><strong>Simulation :</strong> Ansys, Abaqus</li>
      <li><strong>CAM :</strong> TopSolid, SolidWorks, Fusion 360, CATIA V5, 3DEX and ESPRICAM</li>
      <li><strong>Programming :</strong> VBA, HTML, VS code, Arduino, C and Python</li>
      <li><strong>Material Selection :</strong> CESedupack</li>
      <li><strong>Microsoft Office :</strong> Excel, Word, PowerPoint, Teams and Access</li>
      <li><strong>System engineering :</strong> Windchill, CATIA Magic, PLM</li>
    </ul>
    
    {% include cad-tools-ticker.html %}

    I also have a strong background in <strong>mechanical analysis (FEA)</strong>, 
    <strong>ISO Functional Dimensioning (GPS)</strong>, <strong>Stack-UP</strong>, Responsible for preparing technical documentation (<strong>DDR – Design Detail Review</strong>, <strong> DJD – Design Justification Document) </strong>, developing test protocols, managing projects, applying Design for Cost and Manufacturing principles, conducting materials and process engineering, performing feasibility studies, and critical standards such as <strong>IEC 60601</strong> and <strong>Eurocodes</strong>.
  </p>

 

<p>
  When I’m not designing, you’ll probably find me on the football field, editing videos, or tinkering with electronic components to bring them back to life.
 </p>

<p>
  Feel free to reach out !
  </p>

{% include stats-counters.html %}
  
{% include rec.html %}


<section class="linkedin-section-custom">
  <div class="container">
    
    <h2 class="section-title">My Latest LinkedIn Post</h2>
    <p class="section-subtitle">
      Des résultats concrets qui témoignent de mon engagement et de ma passion pour l'ingénierie mécanique.
    </p>

    <div class="linkedin-post-card">
      <a href="https://www.linkedin.com/posts/omar-essalmani_ingaeznierie-programmation-conceptionmaezcanique-activity-7391136624878862336-ax1C?utm_source=share&utm_medium=member_desktop&rcm=ACoAADLEUCcBZosRbAVy07EE8qdAr5_C6LA6Fpo" 
         target="_blank">
        <img src="{{ '/assets/img/projects/Post.jpg' | relative_url }}" 
             alt="Post LinkedIn Omar ESSALMANI">
      </a>
    </div>

    <p class="text-muted mt-4" style="font-size: 0.9rem;">
      Click the image to read the full post on LinkedIn.
    </p>
    
  </div>
</section>

<section class="contact-section">
    <div class="contact-container">
        <h2 class="contact-title">Contact Me</h2>
        <p class="contact-subtitle">Have a project in mind? Feel free to send me a message.</p>
        
        <form id="contact-form" class="contact-form">
            <div class="input-group">
                <input type="text" name="name" placeholder="Your Name" required>
            </div>
            <div class="input-group">
                <input type="email" name="email" placeholder="Your Email" required>
            </div>
            <div class="input-group">
                <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" class="submit-btn" id="submit-btn">
                <span>Send Message</span>
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
        btnText.textContent = 'Sending...';
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
                showNotification('✓', 'Message sent successfully!', 'success');
                form.reset();
            } else {
                // Erreur du serveur
                showNotification('✗', 'Oops! Something went wrong.', 'error');
            }
        } catch (error) {
            // Erreur réseau
            console.error('Error:', error);
            showNotification('✗', 'Network error. Please try again.', 'error');
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

