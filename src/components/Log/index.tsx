import { LogContainer, LogList, LogItem } from './styles';

type LogProps = {
	logs: Date[];
};

export default function Log({ logs }: LogProps) {
	return (
		<LogContainer logs={logs}>
			<LogList>
				{logs
					.map((date, i) => {
						const differenceFromStart = ((date.getTime() - logs[0].getTime()) / 1000).toFixed(2);
						const differenceFromPrev = ((date.getTime() - logs[i - 1]?.getTime()) / 1000).toFixed(2);

						return (
							<LogItem key={i}>
								{date.toLocaleTimeString('ru-RU', {
									hour: '2-digit',
									minute: '2-digit',
									second: '2-digit',
									fractionalSecondDigits: 3,
								})}
								{i > 0 && ` ${differenceFromStart}sec +${differenceFromPrev}sec`}
							</LogItem>
						);
					})
					.reverse()}
			</LogList>
		</LogContainer>
	);
}
