import { DataSource } from "@/app/utils/data";
import { DefaultSleepTime, sleep } from "@/app/utils/sleep";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useEffect } from "react";

const Cache = new Map<string, typeof DataSource>();

const queryResults = (query: string) => {
  if (!Cache.has(query)) {
    throw new Promise((resolve) => {
      Cache.set(
        query,
        DataSource.filter((film) =>
          film.title.toLowerCase().includes(query.toLowerCase())
        )
      );

      sleep();

      resolve(Cache.get(query));
    });
  }

  return Cache.get(query)!;
};

export const FilteredList = ({ query }: { query: string }) => {
  const filteredFilms = queryResults(query);

  useEffect(() => {
    Cache.clear();
  }, []);

  return (
    <List>
      {filteredFilms.map(({ id, title, description }) => (
        <ListItem key={id}>
          <ListItemText primary={title} secondary={description} />
        </ListItem>
      ))}
    </List>
  );
};
