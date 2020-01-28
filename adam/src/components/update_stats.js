import React, {useState, useEffect} from 'react'

const UpdateStats = () => {
    const [roxie, setRoxie] = useState({Avg: "", OBP: "", SLG: "", Hits: "", ABs: "", Doubles: "", Triples: "", HRs: "", Rs: "", RBIs: "", SBs: "", Walks: ""})
    const [maggie, setMaggie] = useState({Avg: "", OBP: "", SLG: "", Hits: "", ABs: "", Doubles: "", Triples: "", HRs: "", Rs: "", RBIs: "", SBs: "", Walks: ""})
    const [annika, setAnnika] = useState({Avg: "", OBP: "", SLG: "", Hits: "", ABs: "", Doubles: "", Triples: "", HRs: "", Rs: "", RBIs: "", SBs: "", Walks: ""})
    const [avery, setAvery] = useState({Avg: "", OBP: "", SLG: "", Hits: "", ABs: "", Doubles: "", Triples: "", HRs: "", Rs: "", RBIs: "", SBs: "", Walks: ""})
    const [brianna, setBrianna] = useState({Avg: "", OBP: "", SLG: "", Hits: "", ABs: "", Doubles: "", Triples: "", HRs: "", Rs: "", RBIs: "", SBs: "", Walks: ""})
    const [caitlin, setCaitlin] = useState({Avg: "", OBP: "", SLG: "", Hits: "", ABs: "", Doubles: "", Triples: "", HRs: "", Rs: "", RBIs: "", SBs: "", Walks: ""})
    const [charlotte, setCharlotte] = useState({Avg: "", OBP: "", SLG: "", Hits: "", ABs: "", Doubles: "", Triples: "", HRs: "", Rs: "", RBIs: "", SBs: "", Walks: ""})
    const [jacey, setJacey] = useState({Avg: "", OBP: "", SLG: "", Hits: "", ABs: "", Doubles: "", Triples: "", HRs: "", Rs: "", RBIs: "", SBs: "", Walks: ""})
    const [jaidyn, setJaidyn] = useState({Avg: "", OBP: "", SLG: "", Hits: "", ABs: "", Doubles: "", Triples: "", HRs: "", Rs: "", RBIs: "", SBs: "", Walks: ""})
    const [katie, setKatie] = useState({Avg: "", OBP: "", SLG: "", Hits: "", ABs: "", Doubles: "", Triples: "", HRs: "", Rs: "", RBIs: "", SBs: "", Walks: ""})
    const [mikenna, setMikenna] = useState({Avg: "", OBP: "", SLG: "", Hits: "", ABs: "", Doubles: "", Triples: "", HRs: "", Rs: "", RBIs: "", SBs: "", Walks: ""})
    const [reese, setReese] = useState({Avg: "", OBP: "", SLG: "", Hits: "", ABs: "", Doubles: "", Triples: "", HRs: "", Rs: "", RBIs: "", SBs: "", Walks: ""})
    const [sierra, setSierra] = useState({Avg: "", OBP: "", SLG: "", Hits: "", ABs: "", Doubles: "", Triples: "", HRs: "", Rs: "", RBIs: "", SBs: "", Walks: ""})      
    
    const addRoxie = e => {
        e.preventDefault()
        setRoxie({...roxie, [e.target.name]: e.target.value})
    }
    const addMaggie = e => {
        e.preventDefault()
        setMaggie({...maggie, [e.target.name]: e.target.value})
    }
    const addAnnika = e => {
        e.preventDefault()
        setAnnika({...annika, [e.target.name]: e.target.value})
    }
    const addAvery = e => {
        e.preventDefault()
        setAvery({...avery, [e.target.name]: e.target.value})
    }
    const addBrianna = e => {
        e.preventDefault()
        setBrianna({...brianna, [e.target.name]: e.target.value})
    }
    const addCaitlin = e => {
        e.preventDefault()
        setCaitlin({...caitlin, [e.target.name]: e.target.value})
    }
    const addCharlotte = e => {
        e.preventDefault()
        setCharlotte({...charlotte, [e.target.name]: e.target.value})
    }
    const addJacey = e => {
        e.preventDefault()
        setJacey({...jacey, [e.target.name]: e.target.value})
    }
    const addJaidyn = e => {
        e.preventDefault()
        setJaidyn({...jaidyn, [e.target.name]: e.target.value})
    }
    const addKatie = e => {
        e.preventDefault()
        setKatie({...katie, [e.target.name]: e.target.value})
    }
    const addMikenna = e => {
        e.preventDefault()
        setMikenna({...mikenna, [e.target.name]: e.target.value})
    }
    const addReese = e => {
        e.preventDefault()
        setReese({...reese, [e.target.name]: e.target.value})
    }
    const addSierra = e => {
        e.preventDefault()
        setSierra({...sierra, [e.target.name]: e.target.value})
    }

    console.log('roxie', roxie)
    console.log('maggie', maggie)    
      
      
        
       
        
    
    
    
    
    return (
        <div>      
            <div>
                <p>Roxie</p>
            <form>                        
                <input type="text" name="Walks" placeholder="walks" value={roxie.Walks} onChange={addRoxie} ></input>                        
                <input type="text" name="Hits" value={roxie.Hits} onChange={addRoxie} placeholder="Hits"></input>
                <input type="text" name="ABs" value={roxie.ABs} onChange={addRoxie} placeholder="Abs"></input>
                <input type="text" name="Doubles" value={roxie.Doubles} placeholder="Doubles" onChange={addRoxie}></input>
                <input type="text" name="Triples" value={roxie.Triples} onChange={addRoxie} placeholder="Triples"></input>
                <input type="text" name="HRs" value={roxie.HRs} onChange={addRoxie} placeholder="HRs"></input>
                <input type="text" name="Rs" value={roxie.Rs} onChange={addRoxie} placeholder="Rs"></input>
                <input type="text" name="RBIs" value={roxie.RBIs} onChange={addRoxie} placeholder="RBIs"></input>
                <input type="text" name="SBs" value={roxie.SBs} onChange={addRoxie} placeholder="SBs"></input>
                <button>Submit</button>                        
            </form>
            </div>
            <div>
                <p>Maggie</p>
            <form>                        
                <input type="text" name="Walks" placeholder="walks" value={maggie.Walks} onChange={addMaggie} ></input>                        
                <input type="text" name="Hits" value={maggie.Hits} onChange={addMaggie} placeholder="Hits"></input>
                <input type="text" name="ABs" value={maggie.ABs} onChange={addMaggie} placeholder="Abs"></input>
                <input type="text" name="Doubles" value={maggie.Doubles} placeholder="Doubles" onChange={addMaggie}></input>
                <input type="text" name="Triples" value={maggie.Triples} onChange={addMaggie} placeholder="Triples"></input>
                <input type="text" name="HRs" value={maggie.HRs} onChange={addMaggie} placeholder="HRs"></input>
                <input type="text" name="Rs" value={maggie.Rs} onChange={addMaggie} placeholder="Rs"></input>
                <input type="text" name="RBIs" value={maggie.RBIs} onChange={addMaggie} placeholder="RBIs"></input>
                <input type="text" name="SBs" value={maggie.SBs} onChange={addMaggie} placeholder="SBs"></input>
                <button>Submit</button>                        
            </form>
            </div>
            <div>
                <p>Annika</p>
            <form>                        
                <input type="text" name="Walks" placeholder="walks" value={annika.Walks} onChange={addAnnika} ></input>                        
                <input type="text" name="Hits" value={annika.Hits} onChange={addAnnika} placeholder="Hits"></input>
                <input type="text" name="ABs" value={annika.ABs} onChange={addAnnika} placeholder="Abs"></input>
                <input type="text" name="Doubles" value={annika.Doubles} placeholder="Doubles" onChange={addAnnika}></input>
                <input type="text" name="Triples" value={annika.Triples} onChange={addAnnika} placeholder="Triples"></input>
                <input type="text" name="HRs" value={annika.HRs} onChange={addAnnika} placeholder="HRs"></input>
                <input type="text" name="Rs" value={annika.Rs} onChange={addAnnika} placeholder="Rs"></input>
                <input type="text" name="RBIs" value={annika.RBIs} onChange={addAnnika} placeholder="RBIs"></input>
                <input type="text" name="SBs" value={annika.SBs} onChange={addAnnika} placeholder="SBs"></input>
                <button>Submit</button>                        
            </form>
            </div>
            <div>
                <p>Avery</p>
            <form>                        
                <input type="text" name="Walks" placeholder="walks" value={avery.Walks} onChange={addAvery} ></input>                        
                <input type="text" name="Hits" value={avery.Hits} onChange={addAvery} placeholder="Hits"></input>
                <input type="text" name="ABs" value={avery.ABs} onChange={addAvery} placeholder="Abs"></input>
                <input type="text" name="Doubles" value={avery.Doubles} placeholder="Doubles" onChange={addAvery}></input>
                <input type="text" name="Triples" value={avery.Triples} onChange={addAvery} placeholder="Triples"></input>
                <input type="text" name="HRs" value={avery.HRs} onChange={addAvery} placeholder="HRs"></input>
                <input type="text" name="Rs" value={avery.Rs} onChange={addAvery} placeholder="Rs"></input>
                <input type="text" name="RBIs" value={avery.RBIs} onChange={addAvery} placeholder="RBIs"></input>
                <input type="text" name="SBs" value={avery.SBs} onChange={addAvery} placeholder="SBs"></input>
                <button>Submit</button>                        
            </form>
            </div>
            <div>
                <p>Brianna</p>
            <form>                        
                <input type="text" name="Walks" placeholder="walks" value={brianna.Walks} onChange={addBrianna} ></input>                        
                <input type="text" name="Hits" value={brianna.Hits} onChange={addBrianna} placeholder="Hits"></input>
                <input type="text" name="ABs" value={brianna.ABs} onChange={addBrianna} placeholder="Abs"></input>
                <input type="text" name="Doubles" value={brianna.Doubles} placeholder="Doubles" onChange={addBrianna}></input>
                <input type="text" name="Triples" value={brianna.Triples} onChange={addBrianna} placeholder="Triples"></input>
                <input type="text" name="HRs" value={brianna.HRs} onChange={addBrianna} placeholder="HRs"></input>
                <input type="text" name="Rs" value={brianna.Rs} onChange={addBrianna} placeholder="Rs"></input>
                <input type="text" name="RBIs" value={brianna.RBIs} onChange={addBrianna} placeholder="RBIs"></input>
                <input type="text" name="SBs" value={brianna.SBs} onChange={addBrianna} placeholder="SBs"></input>
                <button>Submit</button>                         
            </form>
            </div>
            <div>
                <p>Caitlin</p>
            <form>                        
                <input type="text" name="Walks" placeholder="walks" value={caitlin.Walks} onChange={addCaitlin} ></input>                        
                <input type="text" name="Hits" value={caitlin.Hits} onChange={addCaitlin} placeholder="Hits"></input>
                <input type="text" name="ABs" value={caitlin.ABs} onChange={addCaitlin} placeholder="Abs"></input>
                <input type="text" name="Doubles" value={caitlin.Doubles} placeholder="Doubles" onChange={addCaitlin}></input>
                <input type="text" name="Triples" value={caitlin.Triples} onChange={addCaitlin} placeholder="Triples"></input>
                <input type="text" name="HRs" value={caitlin.HRs} onChange={addCaitlin} placeholder="HRs"></input>
                <input type="text" name="Rs" value={caitlin.Rs} onChange={addCaitlin} placeholder="Rs"></input>
                <input type="text" name="RBIs" value={caitlin.RBIs} onChange={addCaitlin} placeholder="RBIs"></input>
                <input type="text" name="SBs" value={caitlin.SBs} onChange={addCaitlin} placeholder="SBs"></input>
                <button>Submit</button>                        
            </form>
            </div>
            <div>
                <p>Charlotte</p>
            <form>                        
                <input type="text" name="Walks" placeholder="walks" value={charlotte.Walks} onChange={addCharlotte} ></input>                        
                <input type="text" name="Hits" value={charlotte.Hits} onChange={addCharlotte} placeholder="Hits"></input>
                <input type="text" name="ABs" value={charlotte.ABs} onChange={addCharlotte} placeholder="Abs"></input>
                <input type="text" name="Doubles" value={charlotte.Doubles} placeholder="Doubles" onChange={addCharlotte}></input>
                <input type="text" name="Triples" value={charlotte.Triples} onChange={addCharlotte} placeholder="Triples"></input>
                <input type="text" name="HRs" value={charlotte.HRs} onChange={addCharlotte} placeholder="HRs"></input>
                <input type="text" name="Rs" value={charlotte.Rs} onChange={addCharlotte} placeholder="Rs"></input>
                <input type="text" name="RBIs" value={charlotte.RBIs} onChange={addCharlotte} placeholder="RBIs"></input>
                <input type="text" name="SBs" value={charlotte.SBs} onChange={addCharlotte} placeholder="SBs"></input>
                <button>Submit</button>                        
            </form>
            </div>
            <div>
                <p>Jacey</p>
            <form>                        
                <input type="text" name="Walks" placeholder="walks" value={jacey.Walks} onChange={addJacey} ></input>                        
                <input type="text" name="Hits" value={jacey.Hits} onChange={addJacey} placeholder="Hits"></input>
                <input type="text" name="ABs" value={jacey.ABs} onChange={addJacey} placeholder="Abs"></input>
                <input type="text" name="Doubles" value={jacey.Doubles} placeholder="Doubles" onChange={addJacey}></input>
                <input type="text" name="Triples" value={jacey.Triples} onChange={addJacey} placeholder="Triples"></input>
                <input type="text" name="HRs" value={jacey.HRs} onChange={addJacey} placeholder="HRs"></input>
                <input type="text" name="Rs" value={jacey.Rs} onChange={addJacey} placeholder="Rs"></input>
                <input type="text" name="RBIs" value={jacey.RBIs} onChange={addJacey} placeholder="RBIs"></input>
                <input type="text" name="SBs" value={jacey.SBs} onChange={addJacey} placeholder="SBs"></input>
                <button>Submit</button>                        
            </form>
            </div>
            <div>
                <p>Jaidyn</p>
            <form>                        
                <input type="text" name="Walks" placeholder="walks" value={jaidyn.Walks} onChange={addJaidyn} ></input>                        
                <input type="text" name="Hits" value={jaidyn.Hits} onChange={addJaidyn} placeholder="Hits"></input>
                <input type="text" name="ABs" value={jaidyn.ABs} onChange={addJaidyn} placeholder="Abs"></input>
                <input type="text" name="Doubles" value={jaidyn.Doubles} placeholder="Doubles" onChange={addJaidyn}></input>
                <input type="text" name="Triples" value={jaidyn.Triples} onChange={addJaidyn} placeholder="Triples"></input>
                <input type="text" name="HRs" value={jaidyn.HRs} onChange={addJaidyn} placeholder="HRs"></input>
                <input type="text" name="Rs" value={jaidyn.Rs} onChange={addJaidyn} placeholder="Rs"></input>
                <input type="text" name="RBIs" value={jaidyn.RBIs} onChange={addJaidyn} placeholder="RBIs"></input>
                <input type="text" name="SBs" value={jaidyn.SBs} onChange={addJaidyn} placeholder="SBs"></input>
                <button>Submit</button>                        
            </form>
            </div>
            <div>
                <p>Katie</p>
            <form>                        
                <input type="text" name="Walks" placeholder="walks" value={katie.Walks} onChange={addKatie} ></input>                        
                <input type="text" name="Hits" value={katie.Hits} onChange={addKatie} placeholder="Hits"></input>
                <input type="text" name="ABs" value={katie.ABs} onChange={addKatie} placeholder="Abs"></input>
                <input type="text" name="Doubles" value={katie.Doubles} placeholder="Doubles" onChange={addKatie}></input>
                <input type="text" name="Triples" value={katie.Triples} onChange={addKatie} placeholder="Triples"></input>
                <input type="text" name="HRs" value={katie.HRs} onChange={addKatie} placeholder="HRs"></input>
                <input type="text" name="Rs" value={katie.Rs} onChange={addKatie} placeholder="Rs"></input>
                <input type="text" name="RBIs" value={katie.RBIs} onChange={addKatie} placeholder="RBIs"></input>
                <input type="text" name="SBs" value={katie.SBs} onChange={addKatie} placeholder="SBs"></input>
                <button>Submit</button>                        
            </form>
            </div>
            <div>
                <p>Mikenna</p>
            <form>                        
                <input type="text" name="Walks" placeholder="walks" value={mikenna.Walks} onChange={addMikenna} ></input>                        
                <input type="text" name="Hits" value={mikenna.Hits} onChange={addMikenna} placeholder="Hits"></input>
                <input type="text" name="ABs" value={mikenna.ABs} onChange={addMikenna} placeholder="Abs"></input>
                <input type="text" name="Doubles" value={mikenna.Doubles} placeholder="Doubles" onChange={addMikenna}></input>
                <input type="text" name="Triples" value={mikenna.Triples} onChange={addMikenna} placeholder="Triples"></input>
                <input type="text" name="HRs" value={mikenna.HRs} onChange={addMikenna} placeholder="HRs"></input>
                <input type="text" name="Rs" value={mikenna.Rs} onChange={addMikenna} placeholder="Rs"></input>
                <input type="text" name="RBIs" value={mikenna.RBIs} onChange={addMikenna} placeholder="RBIs"></input>
                <input type="text" name="SBs" value={mikenna.SBs} onChange={addMikenna} placeholder="SBs"></input>
                <button>Submit</button>                        
            </form>
            </div>
            <div>
                <p>Reese</p>
            <form>                        
                <input type="text" name="Walks" placeholder="walks" value={reese.Walks} onChange={addReese} ></input>                        
                <input type="text" name="Hits" value={reese.Hits} onChange={addReese} placeholder="Hits"></input>
                <input type="text" name="ABs" value={reese.ABs} onChange={addReese} placeholder="Abs"></input>
                <input type="text" name="Doubles" value={reese.Doubles} placeholder="Doubles" onChange={addReese}></input>
                <input type="text" name="Triples" value={reese.Triples} onChange={addReese} placeholder="Triples"></input>
                <input type="text" name="HRs" value={reese.HRs} onChange={addReese} placeholder="HRs"></input>
                <input type="text" name="Rs" value={reese.Rs} onChange={addReese} placeholder="Rs"></input>
                <input type="text" name="RBIs" value={reese.RBIs} onChange={addReese} placeholder="RBIs"></input>
                <input type="text" name="SBs" value={reese.SBs} onChange={addReese} placeholder="SBs"></input>
                <button>Submit</button>                        
            </form>
            </div>
            <div>
                <p>Sierra</p>
            <form>                        
                <input type="text" name="Walks" placeholder="walks" value={sierra.Walks} onChange={addSierra} ></input>                        
                <input type="text" name="Hits" value={sierra.Hits} onChange={addSierra} placeholder="Hits"></input>
                <input type="text" name="ABs" value={sierra.ABs} onChange={addSierra} placeholder="Abs"></input>
                <input type="text" name="Doubles" value={sierra.Doubles} placeholder="Doubles" onChange={addSierra}></input>
                <input type="text" name="Triples" value={sierra.Triples} onChange={addSierra} placeholder="Triples"></input>
                <input type="text" name="HRs" value={sierra.HRs} onChange={addSierra} placeholder="HRs"></input>
                <input type="text" name="Rs" value={sierra.Rs} onChange={addSierra} placeholder="Rs"></input>
                <input type="text" name="RBIs" value={sierra.RBIs} onChange={addSierra} placeholder="RBIs"></input>
                <input type="text" name="SBs" value={sierra.SBs} onChange={addSierra} placeholder="SBs"></input>
                <button>Submit</button>                        
            </form>
            </div>          
            
            
        </div>
    )
}

export default UpdateStats

