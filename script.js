// Scroll infinito con canciones de Spotify
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const songsContainer = document.getElementById("songs");

  // Lista de canciones (título, descripción, embed de Spotify)
  const songs = [
    { title: "Spring Day", desc: "Balada nostálgica de BTS", embed: "https://open.spotify.com/embed/track/3f9zqUnrnIq0LANhmnaF0V" },
    { title: "DNA", desc: "Himno pop energético", embed: "https://open.spotify.com/embed/track/0mL82sxCRjrs3br407IdJh" },
    { title: "Butter", desc: "Hit funky y pegajoso", embed: "https://open.spotify.com/embed/track/6F5c58TMEs1byxUstkzVeM" },
    { title: "Fake Love", desc: "Pop-rock intenso", embed: "https://open.spotify.com/embed/track/09mEdoA6zrmBPgTEN5qXmN" },
    { title: "Boy With Luv (feat. Halsey)", desc: "Tema alegre y brillante", embed: "https://open.spotify.com/embed/track/4yugZvBYaoREkJKtbG08Qr" },
    { title: "Dynamite", desc: "Éxito global en inglés", embed: "https://open.spotify.com/embed/track/5QDLhrAOJJdNAmCTJ8xMyW" },
    { title: "Life Goes On", desc: "Canción esperanzadora", embed: "https://open.spotify.com/embed/track/5FVd6KXrgO9B3JPmC8OPst" },
    { title: "MIC Drop (Steve Aoki Remix)", desc: "Tema poderoso con beats explosivos", embed: "https://open.spotify.com/embed/track/6hvczQ05jc1yGlp9zhb95V" },
    { title: "Save Me", desc: "Clásico emocional mezcla EDM y pop", embed: "https://open.spotify.com/embed/track/0OLcM8O4ZP2Y7Yt9nJm9Tt" },
    { title: "Blood Sweat & Tears", desc: "Mezcla de sensualidad y arte visual", embed: "https://open.spotify.com/embed/track/0GzuHFG0K4hGbj5Sw8ldzR" }
  ];

  let index = 0;
  const batchSize = 3;

  function loadSongs() {
    const end = Math.min(index + batchSize, songs.length);
    for (let i = index; i < end; i++) {
      const song = songs[i];
      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `<h2>${song.title}</h2>
        <p>${song.desc}</p>
        <iframe style="border-radius:12px" src="${song.embed}" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"></iframe>`;
      songsContainer.appendChild(card);
    }
    index = end;
  }

  // Cargar primeras canciones
  loadSongs();

  // Scroll infinito
  window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
      if (index < songs.length) {
        loadSongs();
      }
    }
  });
});
