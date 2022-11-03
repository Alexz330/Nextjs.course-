import { GetStaticProps, NextPage } from "next";
import Image from "next/image";

import { Layout } from "../components/layouts";
import pokeApi from "../../api/pokeApi";
import { PokemonListResponse, SmallPokemon } from "../../interfaces";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  console.log(pokemons[0].img, "img");

  return (
    <Layout title="List Pokemons">
      <ul>
        {pokemons.map((pokemon, i) => (
          <li key={i}>
            <p>#{pokemon.id}-{pokemon.name}</p>
            <Image src={pokemon.img} width={70} height={70} alt={""} />
          </li>
        ))}
      </ul>
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
