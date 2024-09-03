import Buttons from "./Buttons";
import { useAuth } from "../service/AuthContext";

const JobBtns = ({ onViewMore, onBack }) => {
    const { authData } = useAuth();

    return (
        <div style={{ display: "flex" }}>
            {onBack ? (
                <Buttons onClick={onBack}>Back</Buttons>  // Render "Back" button when onBack is provided
            ) : (
                <Buttons onClick={onViewMore}>viewMore</Buttons> // Render "View More" button when onBack is not provided
            )}
            <Buttons>Apply</Buttons>
        </div>
    );
}

export default JobBtns;

