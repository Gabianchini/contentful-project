import stylesProduct1 from '../styles/Product1.module.css'
//var contentful = require("contentful") // outra forma de importação 
import * as contentful from "contentful"
console.log("contentful:", contentful)
import Stars from '../components/atoms/Stars';
import Img from '../components/atoms/AuthorImg';
import FeedbackText from '../components/atoms/FeedbackText';
import AuthorName from '../components/atoms/AuthorName';
import CompanyText from '../components/atoms/CompanyText';


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
                data:feedback.items
            }
           
        }
        
    }


export default function Feedback({data}){
  
  return(
    
  data.map((item) => (
    <>
    <div className={stylesProduct1.feedback__Container} key={item.fields.authorName} >
      <Img className={stylesProduct1.feedback__Stars} alt="stars" src={item.fields.stars.fields.file.url}/>
      <FeedbackText className={stylesProduct1.feedback__Text}>{item.fields.avaliationText}</FeedbackText>
    <div className={stylesProduct1.feedback__description}>
      <Img className={stylesProduct1.feedback__authorImg} alt="some alt text" src={item.fields.authorImg.fields.file.url}/>
      <AuthorName className={stylesProduct1.feedback__authorName}>{item.fields.authorName}</AuthorName>
      <CompanyText className={stylesProduct1.feedback__companyText}>{item.fields.companyText}</CompanyText>
    </div>
    </div>
      
    </>
  ))
  )
  }


 





    


    //will be passed to the page component as props
    
