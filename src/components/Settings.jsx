import { useContext } from 'react';
import { TaskContext } from '../store/TaskContext';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RestoreIcon from '@mui/icons-material/Restore';

export default function Settings() {
    const { dispatch } = useContext(TaskContext);
    return (
        <div className='row settings-row m-2 p-2'>
            <div
                className="col settings-col"
                data-test="All-Clear-btn"
                onClick={() => dispatch({ type: 'ALL_CLEAR' })}
            >
                <span className="settings-desc p-2"> <DeleteSweepIcon /><br /> All Clear</span>
            </div>
            <div
                className="col settings-col"
                data-test="clear-finishedTask-btn"
                onClick={() => dispatch({ type: 'REMOVE_DONE_TASK' })}
            >
                <span className="settings-desc">< CheckCircleIcon /><br /> Remove done</span>
            </div>
            <div
                className="col settings-col"
                data-test="reset-btn"
                onClick={() => dispatch({ type: 'UNCHECK_ALL_TASKS' })}
            >
                <span className="settings-desc"><RestoreIcon /> <br />Uncheck All Tasks</span>

            </div>
        </div>
    )
}