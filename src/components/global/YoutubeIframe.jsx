const YouTubeVideo = ({ link, title }) =>
{

  return (

    <iframe
      className={ "w-full h-full absolute top-0 left-0" }
      src={ link }
      frameBorder="0"
      allowFullScreen
      title={ title }
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
    ></iframe>

  );
};

export default YouTubeVideo;
