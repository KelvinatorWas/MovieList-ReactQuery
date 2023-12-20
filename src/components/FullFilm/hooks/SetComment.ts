import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { SERVER_LINK } from "../../FilmManager/FilmManager";
import { FilmData } from "../../Film/Film";


export const SetComment = ({id, title, releaseYear, genre, duration, description, rating, director, comments}:FilmData) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn:(payload:string) => {
      return axios.put(`${SERVER_LINK}/${id}`,
        {id, title, releaseYear, genre, duration, description, rating, director, comments: [...comments,{text: payload, user:"Anonymus"}]}
      )
    },
    onSuccess:() => {
      queryClient.invalidateQueries({queryKey: ['film']});
    }
  });
} 