import type { ChatHistories } from '@/types';
import { Box } from '@mui/material';
import type { FC } from 'react';
import { ChatBubble } from '../ChatBubble';

type Props = {
	chatHistories: ChatHistories;
};

export const ChatMain: FC<Props> = ({ chatHistories }) => {
	return (
		<Box sx={{ width: '100%', height: '100%', padding: '16px' }}>
			{chatHistories.map((chatHistory) => (
				<ChatBubble
					key={chatHistory.id}
					type={chatHistory.role}
					message={chatHistory.content}
				/>
			))}
		</Box>
	);
};
