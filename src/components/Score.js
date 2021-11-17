import { DataContext } from "../App"
import { useContext } from "react"
import QuestionsData from "../data/QuestionsData"

const Score = ()=>{
        const {score} = useContext(DataContext)

    return(
        <div className="score">
            <h1>ສະຫຼຸບຄະແນນເສັງ</h1>
            <h2>{score} / {QuestionsData.length}</h2>
        </div>
    )
}
export default Score