'use client';

import { ChatForm } from '@/components/ui/ChatForm';
import { ChatMain } from '@/components/ui/ChatMain';
import { Header } from '@/components/ui/Header';
import { useChatLogic } from '@/hooks/useChatLogic';
import { Box } from '@mui/material';
import React from 'react';

export const Chat = () => {
	const { chatHistory, message, handleChangeMessage, handleSendMessage } =
		useChatLogic();

	return (
		<Box
			component="main"
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100dvh',
				width: '100vhw',
			}}
		>
			<Box sx={{ width: '100%' }}>
				<Header />
			</Box>
			<Box sx={{ flexGrow: 1, width: '100%' }}>
				<ChatMain chatHistory={chatHistory} />
			</Box>
			<Box sx={{ width: '100%' }}>
				<ChatForm
					message={message}
					setMessage={handleChangeMessage}
					sendMessage={handleSendMessage}
				/>
			</Box>
		</Box>
	);
};
