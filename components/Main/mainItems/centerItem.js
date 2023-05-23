export default () => {
    return (
        <>
            <main className="centerDiv">
                <h5 className="centerHeading font-semiBold">Welcome to EduAlerts Admission Counseling</h5>
                <p>Welcome to the EduAlerts Admission Counseling for Undergraduate Programmes in premier Delhi Government funded universities offering Engineering, Architecture, and Management programmes. The EduAlerts Admission Counseling was initiated in 2014 by the Govt. of NCT of Delhi to streamline the admission process and minimize inconvenience for students and their guardians. This year, the participating universities in the EduAlerts Admission Counseling include Delhi Technological University (DTU), Indira Gandhi Delhi Technical University for Women (IGDTUW), Indraprastha Institute of Information Technology, Delhi (IIIT-D), Netaji Subhas University of Technology (NSUT), and Delhi Skill and Entrepreneurship University (DSEU). The counseling is conducted online with the support of the National Informatics Centre (NIC). <br />Admissions are based on the rank of students in the Joint Entrance Examination, JEE (Main), conducted by the National Testing Agency (NTA). The JAC Delhi counseling will allocate a total of 6,372 seats in Engineering across the five participating institutions. For the B.Arch programme offered by IGDTUW and NSUT, separate counseling sessions will be held. <br />Please note that the counseling procedure and schedule may be subject to changes due to the prevailing situation in the country. Any updates or amendments to the counseling procedure and schedule will be communicated through the EduAlerts Admission Counseling website <a href="">(www.edualerts.ac.in)</a>. We strongly advise candidates and their parents/guardians to regularly visit the EduAlerts Admission Counseling website for the latest information and updates. <br />We wish you the best of luck in your admission process and encourage you to stay informed through EduAlerts Admission Counseling.</p>
                <div className="btnContainer">
                    <button className="btn">EduAlerts B.Tech. Admission Counseling Registration and Login</button>
                    <button className="btn">EduAlerts B.Arch. Admission Counseling Registration and Login</button>
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