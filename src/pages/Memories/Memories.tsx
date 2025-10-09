import './Memories.css';

const Memories = () => {
  return (
    <main className="Memories">
      <section>
        <h2>Escucha el último podcast</h2>
        <hr />
        <span>May 18, 2025 - 23 min 48 sec</span>
        <h3>Cada paso cuenta, en Investiga, que no es poco.</h3>
        <p>
          Este sábado, en Investiga, que no es poco, os contamos el proyecto "Cada paso cuenta" de la Facultad de
          Ciencias Económicas y Empresariales de Albacete. Y visitanos en el laboratorio de Química de la investigadora
          Edelmira Valero, de la Escuela Técnica Superior de Ingeniería Industrial, también en Albacete, para conocer a
          su equipo de investigación.
        </p>
        <figure>
          <figcaption></figcaption>
          <audio
            controls
            controlsList="nodownload"
            src="src/assets/audio/cadapasocuentainvestiganoes-castillalamanchamedia-ivoox147156899.mp3"
          ></audio>
        </figure>
      </section>
      <section>
        <h2>Vermú de nanociencia 2021: Materiales 3DOM e impresión 3D para Descontaminación ambiental</h2>
        <hr />
        <p>
          Materiales 3DOM e impresión 3D para Descontaminación ambiental por Jhon Mauricio Aguirre Cortes Ingeniero e
          investigador en ciencia y tecnología de materiales. Con experiencia en la síntesis y caracterización de
          nanoestructuras. Formulación y ejecución de proyectos. Docente.
        </p>
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
      </section>
    </main>
  );
};

export default Memories;
