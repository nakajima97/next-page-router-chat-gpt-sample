'use client';

import { ChatForm } from '@/components/ui/ChatForm';
import { ChatMain } from '@/components/ui/ChatMain';
import { Header } from '@/components/ui/Header';
import type { ChatHistories } from '@/types';
import { Box } from '@mui/material';
import React, { useState } from 'react';

export const Chat = () => {
	// 会話履歴を管理するためのstate
	const [chatHistories, setChatHistories] = useState<ChatHistories>([]);

	// チャット入力欄の値を管理するためのstate
	const [message, setMessage] = useState('');

	const sendMessage = async () => {
		console.log('メッセージを送る');
	};

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
				<ChatMain chatHistories={chatHistories} />
			</Box>
			<Box sx={{ width: '100%' }}>
				<ChatForm
					message={message}
					setMessage={setMessage}
					sendMessage={sendMessage}
				/>
			</Box>
		</Box>
	);
};
