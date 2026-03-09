async function loadPublications() {
  const publist = document.getElementById("publist");

  try {
    const response = await fetch("data/publications.json");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const publications = await response.json();

    if (!Array.isArray(publications) || publications.length === 0) {
      publist.innerHTML = "<p>No publications available.</p>";
      return;
    }

    const sortedPublications = publications.sort((a, b) => b.year - a.year);

    let html = '<div class="pub-items">';

    sortedPublications.forEach((pub) => {
      const doiLink = pub.doi
        ? `<a href="https://doi.org/${pub.doi}" target="_blank" rel="noopener noreferrer">DOI</a>`
        : "";

      const articleLink = pub.url
        ? `<a href="${pub.url}" target="_blank" rel="noopener noreferrer">Article</a>`
        : "";

      const links = [doiLink, articleLink].filter(Boolean).join(" | ");

      html += `
        <div class="pub-item">
          <p class="pub-authors">${pub.authors}</p>
          <h3 class="pub-title">${pub.title}</h3>
          <p class="pub-journal">
            <em>${pub.journal}</em>${pub.volume ? `, ${pub.volume}` : ""}${pub.issue ? `(${pub.issue})` : ""}${pub.pages ? `, ${pub.pages}` : ""} (${pub.year})
          </p>
          ${links ? `<p class="pub-links">${links}</p>` : ""}
        </div>
      `;
    });

    html += "</div>";
    publist.innerHTML = html;
  } catch (error) {
    console.error("Failed to load publications:", error);
    publist.innerHTML = "<p>Failed to load publications.</p>";
  }
}

loadPublications();