import { WatchAction, WatchActionsContainer, WatchContainer, WatchDisplay, WatchHr } from './styles';

type WatchProps = {
	addLog: (date: Date) => void;
	clearLogs: () => any;
	date: Date;
};

export default function Watch({ date, addLog, clearLogs }: WatchProps) {
	return (
		<WatchContainer>
			<WatchDisplay>
				{date.toLocaleTimeString('ru-RU', {
					hour: '2-digit',
					minute: '2-digit',
					second: '2-digit',
				})}
			</WatchDisplay>
			<WatchActionsContainer>
				<WatchAction onClick={() => addLog(date)}>Slice</WatchAction>
				<WatchAction onClick={clearLogs}>Clear</WatchAction>
			</WatchActionsContainer>
			<WatchHr />
		</WatchContainer>
	);
}
