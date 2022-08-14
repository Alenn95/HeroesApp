import { HeroList } from "../components/HeroList"

export const MarvelPage = () => {
  return (
  <>
  <h1>Marvel Comics</h1>
  <hr />
  <ul className="list-group">
  <HeroList publisher={'Marvel Comics'}/>
  </ul>
 
  </>
  )
}
