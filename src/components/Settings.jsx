import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import UnpublishedIcon from '@mui/icons-material/Unpublished';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RestoreIcon from '@mui/icons-material/Restore';

export default function Settings() {
    return (
        <div className='row settings-row'>
            <div
                className="col settings-col"
                data-test="All-Clear-btn"
            >
                <span> <DeleteSweepIcon /><br /> <div className="settings-desc">All<br />Clear</div></span>
            </div>
            <div
                className="col settings-col"
                data-test="hide-finishedTask-btn"
            >
                <span> <UnpublishedIcon /><br /><div className="settings-desc">Hide<br />done</div></span>

            </div>
            <div
                className="col settings-col"
                data-test="clear-finishedTask-btn"
            >
                <span>< CheckCircleIcon /><br /> <div className="settings-desc">Remove<br />done</div></span>
            </div>
            <div
                className="col settings-col"
                data-test="reset-btn"
            >
                <span><RestoreIcon /> <br /><div className="settings-desc">Restore<br />Tasks</div></span>

            </div>
        </div>
    )
}