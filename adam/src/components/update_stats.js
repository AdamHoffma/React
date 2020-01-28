import React, {useState, useEffect} from 'react'

const UpdateStats = () => {
    const [stats, setStats] = useState()
        const Stats = [{
            Name: "Roxie Albert",
            Avg: "",
            OBP: "",
            SLG: "",
            Hits: "",
            ABs: "",
            Doubles: "",
            Triples: "",
            HRs: "",
            Rs: "",
            RBIs: "",
            SBs: "",
            Walks: ""
        },
        {
            Name: "Maggie Philpott",
            Avg: "",
            OBP: "",
            SLG: "",
            Hits: "",
            ABs: "",
            Doubles: "",
            Triples: "",
            HRs: "",
            Rs: "",
            RBIs: "",
            SBs: "",
            Walks: ""
        },
        {
            Name: "Annika Spilde",
            Avg: "",
            OBP: "",
            SLG: "",
            Hits: "",
            ABs: "",
            Doubles: "",
            Triples: "",
            HRs: "",
            Rs: "",
            RBIs: "",
            SBs: "",
            Walks: ""
        },
        {
            Name: "Avery Coover",
            Avg: "",
            OBP: "",
            SLG: "",
            Hits: "",
            ABs: "",
            Doubles: "",
            Triples: "",
            HRs: "",
            Rs: "",
            RBIs: "",
            SBs: "",
            Walks: ""
        },
        {
            Name: "Brianna Williams",
            Avg: "",
            OBP: "",
            SLG: "",
            Hits: "",
            ABs: "",
            Doubles: "",
            Triples: "",
            HRs: "",
            Rs: "",
            RBIs: "",
            SBs: "",
            Walks: ""
        },
        {
            Name: "Caitlin Anderson",
            Avg: "",
            OBP: "",
            SLG: "",
            Hits: "",
            ABs: "",
            Doubles: "",
            Triples: "",
            HRs: "",
            Rs: "",
            RBIs: "",
            SBs: "",
            Walks: ""
        },
        {
            Name: "Charlotte Commons",
            Avg: "",
            OBP: "",
            SLG: "",
            Hits: "",
            ABs: "",
            Doubles: "",
            Triples: "",
            HRs: "",
            Rs: "",
            RBIs: "",
            SBs: "",
            Walks: ""
        },
        {
            Name: "Jacey Lane",
            Avg: "",
            OBP: "",
            SLG: "",
            Hits: "",
            ABs: "",
            Doubles: "",
            Triples: "",
            HRs: "",
            Rs: "",
            RBIs: "",
            SBs: "",
            Walks: ""
        },
        {
            Name: "Jaidyn McNeal",
            Avg: "",
            OBP: "",
            SLG: "",
            Hits: "",
            ABs: "",
            Doubles: "",
            Triples: "",
            HRs: "",
            Rs: "",
            RBIs: "",
            SBs: "",
            Walks: ""
        },
        {
            Name: "Kathryn Duncan",
            Avg: "",
            OBP: "",
            SLG: "",
            Hits: "",
            ABs: "",
            Doubles: "",
            Triples: "",
            HRs: "",
            Rs: "",
            RBIs: "",
            SBs: "",
            Walks: ""
        },
        {
            Name: "Mikenna Hoffman",
            Avg: "",
            OBP: "",
            SLG: "",
            Hits: "",
            ABs: "",
            Doubles: "",
            Triples: "",
            HRs: "",
            Rs: "",
            RBIs: "",
            SBs: "",
            Walks: ""
        },
        {
            Name: "Reese Wagnon",
            Avg: "",
            OBP: "",
            SLG: "",
            Hits: "",
            ABs: "",
            Doubles: "",
            Triples: "",
            HRs: "",
            Rs: "",
            RBIs: "",
            SBs: "",
            Walks: ""
        },
        {
            Name: "Sierra Sikich",
            Avg: "",
            OBP: "",
            SLG: "",
            Hits: "",
            ABs: "",
            Doubles: "",
            Triples: "",
            HRs: "",
            Rs: "",
            RBIs: "",
            SBs: "",
            Walks: ""
        }]
        
    

    useEffect(() => {
        setStats(Stats)
    }, [])

    console.log(stats)

    return (
        <div>
            {Stats.map(each => {
                return (
                    <div>
                        <p>{each.Name}</p>
                    <form>                        
                        <input type="text" placeholder="walks"></input>                        
                        <input type="text" placeholder="Hits"></input>
                        <input type="text" placeholder="Abs"></input>
                        <input type="text" placeholder="Doubles"></input>
                        <input type="text" placeholder="Triples"></input>
                        <input type="text" placeholder="HRs"></input>
                        <input type="text" placeholder="Rs"></input>
                        <input type="text" placeholder="RBIs"></input>
                        <input type="text" placeholder="SBs"></input>
                        <button>Submit</button>                        
                    </form>
                    </div>
                )
            })}
            
        </div>
    )
}

export default UpdateStats

