export default () => {
    return (
        <>
            <main className="centerDiv">
                <h5 className="centerHeading font-semiBold">Welcome to Joint Admission Counseling 2021</h5>
                <p>Joint Admission Counseling (JAC) for admission to Undergraduate Programmes in premier Delhi Government funded universities, offering Engineering, Architecture and Management programmes started in the year 2014, as an initiative of the Govt. of NCT of Delhi, to avoid multiple admission counselings and save the candidates and their guardian from the resulting inconvenience because of shifting of students from one institution to the other during the admission process. This year, Delhi Technological University (DTU), Indira Gandhi Delhi Technical University for Women (IGDTUW), Indraprastha Institute of Information Technology, Delhi (IIITD), Netaji Subhas University of Technology (NSUT) and Delhi Skill and Entrepreneurship University(DSEU) are  participating in JAC which is being conducted online with the support of the National Informatics Centre (NIC). The admissions are done on the basis of rank of students in Joint Entrance Examination, JEE (Main) conducted by the National Testing Agency (NTA). This year, <strong>6372</strong> seats in Engineering offered by the five participating institutions are to be allotted through JAC Delhi counseling. For the B.Arch programme offered by IGDTUW and NSUT, there will be separate counseling. Due to the prevailing situation in the country, there has been a change in the counseling procedure and schedule of the counseling. In case of further unavoidable amendments in the counseling procedure and schedule, the same will be made available on the JAC Delhi website <a style={{color: "#4a99ff", textDecoration: "none"}} href="https://jacdelhi.nic.in">www.jacdelhi.nic.in</a>. In view of this, candidates and their parents/guardians are advised to regularly visit the JAC Delhi website.</p>
                <p>For more counseling related information, download <a style={{color: "#4a99ff", textDecoration: "none"}} href="https://play.google.com/store/apps/details?id=in.nic.gimkerala&hl=en_IN&gl=US">SANDES APP</a> on your mobile</p>
                <div className="btnContainer">
                    <button className="btn">JAC Delhi B.Tech. 2021 Registration  and Login</button>
                    <button className="btn">JAC Delhi B.Arch. 2021 Registration  and Login</button>
                </div>
            </main>


            <style jsx>{`
                .centerDiv{
                    flex: 2.3;
                    margin: 0.75rem;
                }
                    .centerHeading{
                        margin: 0.2rem;
                        margin-bottom: 0.5rem;
                        font-size: 24px;
                        color: black;
                        border-bottom: 1px solid #989898;
                    }
                    .centerDiv p{
                        margin-bottom: 0.9em;
                        padding: 0 5px;
                        font-size: 14px;
                    }


                .btnContainer{
                    margin: 0.5rem 0;
                    display: flex;
                    flex-direction: column;
                }
                .btn{
                    margin: 0.25rem;
                    padding: 0.7rem 2rem;
                    background-color: #00468A;
                    color: white;
                    font-size: 14px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}</style>
        </>
    );
}