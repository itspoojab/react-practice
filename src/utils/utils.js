import axios from "axios";
import moment from "moment";

const getMovieList = () =>{
    return axios
    .post("https://hoblist.com/api/movieList", {
      category: "movies",
      language: "kannada",
      genre: "all",
      sort: "voting",
    })
    .then(function (response) {
      if(response.status === 200){
        const list = response?.data?.result;
        return list;
      }
    })
    .catch(function (error) {
        console.log(error);
        return [];
    });
}

const getFormattedDate = (date) => moment(date).format("DD MMM");

export {
    getMovieList,
    getFormattedDate
}