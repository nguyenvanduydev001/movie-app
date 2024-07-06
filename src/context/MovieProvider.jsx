import {createContext, useState}  from 'react'
import PropType from "prop-types";
import YouTube from "react-youtube";
import Modal from "react-modal";

const opts = {
    height: "500",
    width: "900",
    playerVars: {
      autoplay: 1,
    },
  };

const MovieContext = createContext();

const MovieProvider = ({children}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [trailerKey, setTrailerKey] = useState("");

    const handleTrailer = async (id) => {
        setTrailerKey("");
        try {
          const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
          const options = {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
            },
          };
    
          const movieKey = await fetch(url, options);
          const data = await movieKey.json();
          setTrailerKey(data.results[0].key);
          setModalIsOpen(true);
        } catch (error) {
          setModalIsOpen(false);
          console.log(error);
        }
      };

      return(
        <MovieContext.Provider value={{handleTrailer}}>
            {children}
            <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            zIndex: 99999,
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
        contentLabel="Example Modal"
      >
        <YouTube videoId={trailerKey} opts={opts} />
      </Modal>
        </MovieContext.Provider>
      )
}

MovieProvider.propTypes = {
    children: PropType.node,
}

export {MovieProvider, MovieContext}
