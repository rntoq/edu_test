import {
    CircularProgressbarWithChildren,
    buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const AnswerStatsCircle = ({ correctPercent }) => {
    return (
        <div style={{ width: 116, height: 116 }}>
            <CircularProgressbarWithChildren
                value={correctPercent}
                strokeWidth={15}
                styles={buildStyles({
                    pathColor: '#0D894F', // green
                    trailColor: '#FFB4A3', // red
                })}
            >
                <div style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: '#333843' }}>
                    {correctPercent}%<br />
                </div>
            </CircularProgressbarWithChildren>
        </div>
    );
};

export default AnswerStatsCircle;
