import stylesProduct1 from '../styles/Product1.module.css'
//var contentful = require("contentful") // outra forma de importação 
import * as contentful from "contentful"
console.log("contentful:", contentful)
import Img from '../components/atoms/Img';
import Text from '../components/atoms/Text';
import Title from '../components/atoms/Title';
import Subtitle from '../components/atoms/Subtitle';

var client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken:process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  export async function getStaticProps(){
    //get data from headless cms
    const feedback = await client.getEntries({content_type: "feedback"})
  // const product = await client.getEntry('3i1SIE0xxuisV56pENWULY')

    return{
            props:{
                response:feedback.items
            }
           
        }
        
    }


export default function ProductPage({response}){
  
  return(
  response.map((item) => (
    <>
    <div className={stylesProduct1.feedbackContainer} >
      <Img className={stylesProduct1.stars} alt="stars" src={item.fields.stars.fields.file.url}/>
      <Text className={stylesProduct1.feedbackText}>{item.fields.avaliationText}</Text>
    <div className={stylesProduct1.description}>
      <Img className={stylesProduct1.authorImg} alt="some alt text" src={item.fields.authorImg.fields.file.url}/>
      <Title className={stylesProduct1.authorName}>{item.fields.authorName}</Title>
      <Subtitle className={stylesProduct1.companyText}>{item.fields.companyText}</Subtitle>
    </div>
    </div>
      <hr/>
    </>
  ))
  )
  }


 





    


    //will be passed to the page component as props
    
