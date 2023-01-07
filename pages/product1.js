import stylesProduct1 from '../styles/Product1.module.css'
//var contentful = require("contentful") // outra forma de importação 
import * as contentful from "contentful"
console.log("contentful:", contentful)

var client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken:process.env.CONTENFUL_ACESS_TOKEN,
  });


export default function ProductPage({authorImg, feedbackText,stars,authorName,companyText}){

    return (
    <div className={stylesProduct1.feedbackContainer}>
    <img className={stylesProduct1.stars} alt="stars" src={stars}/>
    <p className={stylesProduct1.feedbackText}>{feedbackText}</p>
    <div className={stylesProduct1.description}>
    <img className={stylesProduct1.authorImg} alt="some alt text" src={authorImg}/>
    <h4 className={stylesProduct1.authorName}>{authorName}</h4>
    <p className={stylesProduct1.companyText}>{companyText}</p>
    </div>
    </div>
    )
}
    

export async function getStaticProps(){
    //get data from headless cms
    const feedback = await client.getEntries({content_type: "feedback"})
  // const product = await client.getEntry('3i1SIE0xxuisV56pENWULY')
    return{
            props:{
                authorImg:feedback.items[0].fields.authorImg.fields.file.url,
                feedbackText:feedback.items[0].fields.avaliationText,

                stars: feedback.items[0].fields.stars.fields.file.url,

                authorName: feedback.items[0].fields.authorName,
                
                companyText: feedback.items[0].fields.companyText,
            

            }
           
        }
        
    }

    //will be passed to the page component as props
    
