import { NextPage } from "next";
import {Button} from "@nextui-org/react"

const HomePage: NextPage = () =>{
  return(
    <>
      <h1>hola mundo</h1>
      <Button color="gradient">
        hola mundo
      </Button>
    </>
  )
}

export default HomePage;