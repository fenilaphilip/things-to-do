import { today } from "../script.js";

export default function Banner() {
    return (
        <div id="banner">
            <h1>To-do-list</h1>
            <h6>Today: {today}</h6>
        </div>
    );
}