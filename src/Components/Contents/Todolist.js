import React from 'react';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import Fab from '@material-ui/core/Fab';

const todolist = (props) => {
	return (
		<>
			<div className="img-wrap">
				{props.image !== undefined ? (
					<img src={props.image} alt="" />
				) : undefined}
			</div>
			<div className="txt-wrap">
				<h3 className="txt-wrap tit">세탁기 돌리기</h3>
				<p className="txt-wrap txt">
					세탁기 돌릴 때 섬유유연제는 버넬이 냄새가 좋다.
					돌린후에 건조기에 넣어서 건조시키도록하자
					어쩌고저쩌고 텍스트텟스트텍스트
				</p>
			</div>
			y
			<div className="state-wrap">
				<span className="date">2020.10.10 00:00 까지</span>
				<span className="count">
					1일 13시간 33분 남았어요!
				</span>
				<div className="state">
					<div
						className="state-bar"
						style={{ width: '20%' }}></div>
				</div>
			</div>
			<Fab
				variant="extended"
				className="btn btn-primary btn-icon">
				<CreateOutlinedIcon />
			</Fab>
		</>
	);
};

export default todolist;
