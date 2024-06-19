const IplData=({ipl})=>{
        return(
            <>
            {ipl.map((curPoint)=>{
                const {No,Team,Matches,Won,Lost,Tied,NRR,Points}=curPoint;
                return(
                    <>
                    <tr key={No}> 
                          <td>{curPoint.No}</td>
                          <td>{curPoint.Team}</td>
                          <td>{curPoint.Matches}</td>
                          <td>{curPoint.Won}</td>
                          <td>{curPoint.Lost}</td>
                          <td>{curPoint.Tied}</td>
                          <td>{curPoint.NRR}</td>
                          <td>{curPoint.Points}</td>
                    </tr>
                    </>
                )
            })}
            </>
        )
};
export default IplData;