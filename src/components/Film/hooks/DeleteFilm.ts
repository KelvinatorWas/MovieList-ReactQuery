import { useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { SERVER_LINK } from "../../FilmManager/FilmManager";

export const deleteFilm = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn:(id:number) => {
      return axios.delete(`${SERVER_LINK}/${id}`);
    },
    onSuccess:() => {
      queryClient.invalidateQueries({queryKey: ['films']});
    }
  });
};
