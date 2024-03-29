
import pokeApi from "../../../api/pokeApi";
import { Pokemon } from "../../../interfaces";
import { Layout } from "../../components/layouts";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

interface Props {
  pokemon:Pokemon

}

const PokemonPage: NextPage<Props> = ({pokemon}) => {
  return (
    <Layout title={"algun pokemon"}>
      <h1>-{pokemon.name}</h1>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemons151.map((id) => ({ params: { id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const {id} = params as {id:string};

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);
  
  return {
    props: {
     pokemon:data
    },
  };
};

export default PokemonPage;
