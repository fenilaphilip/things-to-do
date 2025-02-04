
export default function Banner() {
    const currentDate = new Date();
    const today = currentDate.toLocaleDateString();
    const day = currentDate.getDay();
    return (
        <div id="banner">
            <h1>To-Do-List</h1>
            <h6 className="m-3">Today: {today}</h6>
        </div>
    );
}