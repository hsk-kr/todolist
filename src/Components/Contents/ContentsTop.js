import React, { useState } from 'react';
import {
	DatePicker,
	KeyboardDatePicker,
	MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Fab from '@material-ui/core/Fab';

const ContentsTop = () => {
	const [selectedDate, handleDateChange] = useState(
		new Date()
	);
	return (
		<div className="contents-top">
			<div className="top-left">
				<h2 className="top-left__list-type">all list</h2>
				<div className="top-left__date">
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<KeyboardDatePicker
							autoOk
							variant="inline"
							inputVariant="outlined"
							format="MM/dd/yyyy"
							value={selectedDate}
							InputAdornmentProps={{ position: 'start' }}
							onChange={(date) => handleDateChange(date)}
						/>
					</MuiPickersUtilsProvider>
				</div>
			</div>
			<div className="top-right">
				<Fab
					variant="extended"
					className="btn btn-primary btn-lg">
					일정추가
				</Fab>
			</div>
		</div>
	);
};

export default ContentsTop;
