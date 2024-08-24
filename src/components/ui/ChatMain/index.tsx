import type { ChatHistory } from '@/types';
import { Box } from '@mui/material';
import type { FC } from 'react';
import { ChatBubble } from '../ChatBubble';

type Props = {
	chatHistory: ChatHistory;
};

export const ChatMain: FC<Props> = ({ chatHistory }) => {
	return (
		<Box sx={{ width: '100%', height: '100%', padding: '16px' }}>
			{chatHistory.map((chatHistory) => (
				<ChatBubble
					key={chatHistory.id}
					type={chatHistory.role}
					message={chatHistory.content}
				/>
			))}
		</Box>
	);
};
