export default (props) => {
    console.log(props.id);
    return (
        <>
            <section>
                <iframe id="document" src={`/api/download?id=${props.id}`} width="400" height="500" frameBorder="0"></iframe>
            </section>

            <style jsx>{`
                section{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                iframe{
                    margin: 0.75rem;
                    flex: 1 1 100%;
                }
            `}</style>
        </>
    );
}