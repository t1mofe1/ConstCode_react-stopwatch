import styled from 'styled-components';

type LogContainerProps = {
	logs: Date[];
};

export const LogContainer = styled.div<LogContainerProps>`
	margin-left: 30px;
	font-size: 25px;
	border: 2px dashed gray;

	min-height: 0;
	height: 320px;
	display: flex;

	${({ logs }) => logs.length === 0 && `display: none`}
`;

export const LogList = styled.ul`
	padding: 20px 60px 0 60px;
	margin: 0;

	flex: 1;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
`;

export const LogItem = styled.li``;
