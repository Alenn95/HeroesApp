import { HeroList } from "../components/HeroList"


export const DcPage = () => {
  
  return (
   <>
   <h1>DC Comics</h1>
   <hr />
   <ul className="list-group">
   <HeroList publisher={'DC Comics'}/>
   </ul>
   
   </>
  )
}
