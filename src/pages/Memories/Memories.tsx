import './Memories.css';

const Memories = () => {
  return (
    <main className="Memories">
      <figure>
        <figcaption></figcaption>
        <audio
          controls
          src="src/assets/audio/cadapasocuentainvestiganoes-castillalamanchamedia-ivoox147156899.mp3"
        ></audio>
      </figure>
      <iframe
        id="video"
        width="600"
        height="315"
        src="https://www.youtube.com/embed/GjyXu3OyeBI"
        title="Dark Souls Dialogue - Hollow Merchant (Male)"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </main>
  );
};

export default Memories;
