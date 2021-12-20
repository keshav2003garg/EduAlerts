export default () => {
    return (
        <div>
            <form action="/api/upload" method="post">
                <input type="file" name="file" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}