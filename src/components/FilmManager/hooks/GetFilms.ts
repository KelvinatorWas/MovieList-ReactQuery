import { useQuery } from "@tanstack/react-query";
import { readData } from "../../../utils/crud";
import { FilmData } from "../../Film/Film";
import { SERVER_LINK } from "../FilmManager";

export const getFilms = () => useQuery({
  queryKey:['films'],
  queryFn: () => {
      return readData<FilmData>(SERVER_LINK);
  }
});