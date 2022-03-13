import { useEffect, useState } from 'react';
import Log from '../Log';
import Watch from '../Watch';
import { StopwatchContainer } from './styles';

export default function Stopwatch() {
	// #region logs
	const [logs, setLogs] = useState<Date[]>([]);

	const addLog = (date: Date) => {
		setLogs((v) => [...v, date]);
	};
	const clearLogs = () => setLogs([]);
	// #endregion

	// #region date
	const [date, setDate] = useState<Date>(new Date());

	useEffect(() => {
		const timer = setTimeout(() => {
			setDate(new Date());
		}, 1);

		return () => clearTimeout(timer);
	}, [date]);
	// #endregion

	return (
		<StopwatchContainer>
			<Watch date={date} addLog={addLog} clearLogs={clearLogs} />
			<Log logs={logs} />
		</StopwatchContainer>
	);
}
