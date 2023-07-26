 import axios from "axios";

  const BASE_URL = "https://api.themoviedb.org/3";
  const TMDB_TOKEN =  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2Q3Y2M0ODJlMDIyNGJkODNlZTdjMDEyYTRhNGZmYSIsInN1YiI6IjY0MGIyY2QxM2E0YTEyMDBlZTU0MWQ2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XJj6NyBCAFjp6b-RTyEkqD7So-UoLJqJ6OZ3_3c8ZI8"

  const headers = {
    Authorization: `Bearer ${TMDB_TOKEN}`,
  };

 export const fetchDataFromApi = async (url, params) => {
   try {
     const { data } = await axios.get(BASE_URL + url, {
       headers,
       params
     });
     return data;
   } catch (err) {
     console.log(err);
     return err;
   }
 };
