import youtube from "@/data/youtube";

export const YoutubeGrid = () => {
  return (
    <>
      {/* <h3 className="mt-10 mb-5 text-2xl">Nuestro canal de <a className="text-cyan-700 font-semibold" target="_blank" href="https://www.youtube.com/@pequenosgenios9884">Youtube!</a></h3> */}
      <div className="mt-10 mb-10 wrapper flex flex-row justify-center gap-3 mx-auto flex-wrap gap-y-5">
        {youtube.map((video, index) => (
          <iframe
            key={index}
            width="390"
            height="218"
            src={video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-xl hover:shadow-2xl transition-all duration-300"
          ></iframe>
        ))}
      </div>
    </>
  );
};

export default YoutubeGrid;
