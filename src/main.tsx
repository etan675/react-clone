import ReactD from "./core/reactd";
import "./style.css";

let count = 0;

const onClick = () => {
    count++;
    console.log('count: ', count);
}

const Counter = (
    <div className="counter" onClick={onClick}>
        count is {count}
    </div>
)

const app = document.getElementById('app');

if (app) {
    ReactD.renderElement(Counter, app);
} else {
    throw new Error("root node 'app' doesn't exist")
}