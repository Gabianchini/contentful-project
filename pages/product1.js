
//var contentful = require("contentful") // outra forma de importação 
import * as contentful from "contentful"
import { PHASE_PRODUCTION_SERVER } from "next/dist/shared/lib/constants";
console.log("contentful:", contentful)

var client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken:process.env.CONTENFUL_ACESS_TOKEN,
  });



export default function ProductPage({heading,subheading}){

    return <>
    <h1>{heading}</h1>
    <h2>{subheading}</h2>
    </>
}

export async function getStaticProps(){
    //get data from headless cms
   const product = await client.getEntry('3i1SIE0xxuisV56pENWULY')
    return{
            props:{
            ...product.fields
            }, 
        }
    }

    //will be passed to the page component as props
    
