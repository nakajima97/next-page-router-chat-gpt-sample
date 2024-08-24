'use client';

import type { Role } from '@/types';
import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import type React from 'react';

type Props = {
	type: Role;
	message: string;
};

export const ChatBubble: React.FC<Props> = ({ type, message }) => {
	const generateBackgroundColor = () => {
		if (type === 'user') return '#afeeee';
		if (type === 'assistant') return '#d3d3d3';
	};

	const generateJustifyContent = () => {
		if (type === 'user') return 'end';
		if (type === 'assistant') return 'start';
	};

	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				justifyContent: generateJustifyContent(),
				margin: '8px',
			}}
		>
			<Box
				sx={{
					backgroundColor: generateBackgroundColor(),
					borderRadius: '16px',
					padding: '8px',
				}}
			>
				<Typography>{message}</Typography>
			</Box>
		</Box>
	);
};
