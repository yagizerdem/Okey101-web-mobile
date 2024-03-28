import Loader from "./Loader";
import "../styles/wait.css";
export default function Wait() {
  return (
    <div className="wait">
      <p>waiting for other player to join room ...</p>
      <br />
      <br />
      <Loader></Loader>
    </div>
  );
}
