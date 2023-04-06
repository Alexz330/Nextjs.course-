import { GetStaticProps, NextPage } from "next";
import Image from "next/image";

import { Layout } from "../components/layouts";
import pokeApi from "../../api/pokeApi";
import { PokemonListResponse, SmallPokemon } from "../../interfaces";
import { Grid} from "@nextui-org/react";
import { PokemonCard } from "../components/pokemon/PokemonCard";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {

  return (
    <Layout title="List Pokemons">
      <Grid.Container gap={10} justify="flex-start">
        {pokemons.map((pokemons,i) => (
          <PokemonCard pokemons={pokemons} key={i}/>
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemons: SmallPokemon[] = data.results.map((poke, index) => {
    return {
      id: index + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        index + 1
      }.svg`,
      name: poke.name,
      url: poke.url,
    };
  });

  return {
    props: {
      pokemons,
    },
  };
};
export default HomePage;
