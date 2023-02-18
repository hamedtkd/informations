import { useTheme } from '@emotion/react';
import MUTextField from '@mui/material/TextField';

export function TextField(props) {
    const theme = useTheme();
    const styles = {
        inputs: {
            height: '6rem',
            width: '90%',
            backgroundColor: '#1E1E1E',
            color: theme.palette.secondary.main,
            borderRadius: '10px',
            '& input::placeholder': {
                color: '#fff ',
            },
        },
    };
    return <MUTextField autoComplete="off" sx={styles.inputs} {...props} />;
}
<div className="form-section">
<h1> {newModal.name}</h1>
<h3> {newModal.job}</h3>

<div className='form'>
    <div className="form-value">
        <span>
            <Icon icon="material-symbols:call-sharp" color="#212121" />
        </span>
        <a href={`tel::${newModal.tell}`}> {newModal.tell}</a>
        {/* <a href="tell:00">+123-456-789</a> */}
    </div>
    <div className="form-value">
        <span>
            <Icon icon="material-symbols:mail-rounded" color="#212121" />

        </span>
        <a href={`mailto::${newModal.email}`}> {newModal.email}</a>

    </div>
    <div className="form-value">
        <span>
            <Icon icon="jam:world" />

        </span>
        <a href={newModal.homepage}> {newModal.homepage}</a>

    </div>
    <div className="form-value">
        <span>
            <Icon icon="material-symbols:location-on" color="#212121" />
        </span>
        <a>{newModal.adress}</a>


    </div>

</div>
</div>