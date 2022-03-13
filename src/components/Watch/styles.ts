import styled from 'styled-components';

export const WatchContainer = styled.div`
	width: 450px;
	background: #e4d094;
	padding: 25px;
	border-radius: 10px;
`;

export const WatchDisplay = styled.div`
	background: white;
	text-align: center;
	font-size: 100px;
	margin-bottom: 15px;
`;

export const WatchActionsContainer = styled.div`
	padding-top: 15px;
	display: flex;
	justify-content: space-between;
`;

export const WatchAction = styled.div`
	width: 200px;
	background: #1e7566;
	padding: 10px;
	font-size: 40px;
	text-align: center;
	color: white;
	border-radius: 100px;
	cursor: pointer;
	user-select: none;
`;

export const WatchHr = styled.div`
	height: 2.5px;
	background: gray;
	margin-top: 40px;
	margin-bottom: 20px;
	border-radius: 100px;
`;
